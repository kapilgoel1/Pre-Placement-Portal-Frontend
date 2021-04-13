import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./App.scss";
import AuthContext from "./AuthContext";
import CourseContext from "./CourseContext";
import AboutUs from "./containers/AboutUs/AboutUs";
import ContactUs from "./containers/ContactUs/ContactUs";
import DeveloperTeam from "./containers/DeveloperTeam/DeveloperTeam";
import AdminDashboard from "./containers/AdminDashboard/AdminDashboard";
import FacultyDashboard from "./containers/FacultyDashboard/FacultyDashboard";
import Home from "./containers/Home/home";
import StudentDashboard from "./containers/StudentDashboard/StudentDashboard";

const App = () => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState({ role: "", loggedin: false });
  const [course, setCourse] = useState("");
  let history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.role === "faculty") {
          setuser({ role: result.role, loggedin: true });
        } else if (result.role === "student") {
          setuser({ role: result.role, loggedin: true });
        } else if (result.role === "admin") {
          setuser({ role: result.role, loggedin: true });
        } else {
          setuser({ role: "", loggedin: false });
          history.replace("/");
        }
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.role, user.loggedin, history]);

  useEffect(() => {
    setCourse(localStorage.getItem("course"));
  }, []);

  const setCourseEverywhere = (course) => {
    localStorage.setItem("course", course);
    setCourse(course);
  };

  let calculatedRoutes = null;

  if (user.role === "student")
    calculatedRoutes = (
      <Switch>
        <CourseContext.Provider
          value={{ course: course, setCourse: setCourseEverywhere }}
        >
          <AuthContext.Provider
            value={{
              user: user,
              setuser: setuser,
            }}
          >
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
            <Route path="/developerteam">
              <DeveloperTeam />
            </Route>

            <Route path="/">
              <StudentDashboard />
            </Route>
          </AuthContext.Provider>
        </CourseContext.Provider>
      </Switch>
    );

  if (user.role === "faculty")
    calculatedRoutes = (
      <Switch>
        <CourseContext.Provider
          value={{ course: course, setCourse: setCourseEverywhere }}
        >
          <AuthContext.Provider
            value={{
              user: user,
              setuser: setuser,
            }}
          >
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
            <Route path="/developerteam">
              <DeveloperTeam />
            </Route>

            <Route path="/">
              <FacultyDashboard />
            </Route>
          </AuthContext.Provider>
        </CourseContext.Provider>
      </Switch>
    );

  if (user.role === "admin")
    calculatedRoutes = (
      <Switch>
        <CourseContext.Provider
          value={{ course: course, setCourse: setCourseEverywhere }}
        >
          <AuthContext.Provider
            value={{
              user: user,
              setuser: setuser,
            }}
          >
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
            <Route path="/developerteam">
              <DeveloperTeam />
            </Route>

            <Route path="/">
              <AdminDashboard />
            </Route>
          </AuthContext.Provider>
        </CourseContext.Provider>
      </Switch>
    );

  if (user.loggedin === false && loading === false)
    calculatedRoutes = (
      <Switch>
        <CourseContext.Provider
          value={{ course: course, setCourse: setCourseEverywhere }}
        >
          <AuthContext.Provider
            value={{
              user: user,
              setuser: setuser,
            }}
          >
            <Route path="/aboutus">
              <AboutUs />
            </Route>

            <Route path="/contactus">
              <ContactUs />
            </Route>

            <Route path="/developerteam">
              <DeveloperTeam />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </AuthContext.Provider>
        </CourseContext.Provider>
      </Switch>
    );

  if (loading)
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  else return <div className="App">{calculatedRoutes}</div>;
};

export default App;
