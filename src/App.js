import React, { useState, useEffect } from "react";
import "./App.scss";

import StudentDashboard from "./containers/StudentDashboard/StudentDashboard";
import FacultyDashboard from "./containers/FacultyDashboard/FacultyDashboard";
import AdminDashboard from "./containers/AdminDashboard/AdminDashboard";
import About from "./components/About/About";
import Home from "./containers/Home/home";
import { Spinner } from "reactstrap";
import { Route, Switch, useHistory } from "react-router-dom";

import AuthContext from "./AuthContext";

const App = () => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState({ role: "", loggedin: false });
  let history = useHistory();

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

  let calculatedRoutes = null;

  if (user.role === "student")
    calculatedRoutes = (
      <Switch>
        <AuthContext.Provider
          value={{
            user: user,
            setuser: setuser,
          }}
        >
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <About />
          </Route>

          <Route path="/">
            <StudentDashboard />
          </Route>
        </AuthContext.Provider>
      </Switch>
    );

  if (user.role === "faculty")
    calculatedRoutes = (
      <Switch>
        <AuthContext.Provider
          value={{
            user: user,
            setuser: setuser,
          }}
        >
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <About />
          </Route>

          <Route path="/">
            <FacultyDashboard />
          </Route>
        </AuthContext.Provider>
      </Switch>
    );

  if (user.role === "admin")
    calculatedRoutes = (
      <Switch>
        <AuthContext.Provider
          value={{
            user: user,
            setuser: setuser,
          }}
        >
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <About />
          </Route>

          <Route path="/">
            <AdminDashboard />
          </Route>
        </AuthContext.Provider>
      </Switch>
    );

  if (user.loggedin === false && loading === false)
    calculatedRoutes = (
      <Switch>
        <AuthContext.Provider
          value={{
            user: user,
            setuser: setuser,
          }}
        >
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </AuthContext.Provider>
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
