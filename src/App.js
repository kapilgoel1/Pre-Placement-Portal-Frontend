import React, { useState, useEffect } from "react";
import "./App.scss";

// import StudentLogin from './containers/StudentLogin/StudentLogin';
import StudentDashboard from "./containers/StudentDashboard/StudentDashboard";
import FacultyDashboard from "./containers/FacultyDashboard/FacultyDashboard";
import About from "./components/About/About";
import Main from "./containers/Main/Main";
import New from "./containers/Home/home";
import { Route, Switch } from "react-router-dom";

import SecuredFacultyRoute from "./SecuredFacultyRoute";
import SecuredStudentRoute from "./SecuredStudentRoute";
import AuthContext from "./AuthContext";

const App = () => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState({ role: "", loggedin: false });

  useEffect(() => {
    console.log("runned");

    fetch("http://localhost:4000/user/details", {
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
        } else {
          setuser({ role: "", loggedin: false });
        }
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.role, user.loggedin]);

  if (loading) return <h1>Loading</h1>;
  else
    return (
      <div className="App">
        <Switch>
          <AuthContext.Provider
            value={{
              user: user,
              setuser: setuser,
            }}
          >
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <About />
            </Route>
            <Route path="/new">
              <New />
            </Route>
            <SecuredFacultyRoute path="/facultydashboard">
              <FacultyDashboard />
            </SecuredFacultyRoute>
            <SecuredStudentRoute path="/studentdashboard">
              <StudentDashboard />
            </SecuredStudentRoute>
          </AuthContext.Provider>
        </Switch>
      </div>
    );
};

export default App;
