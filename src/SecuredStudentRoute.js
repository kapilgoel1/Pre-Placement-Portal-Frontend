import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AuthContext from "./AuthContext";

const SecuredStudentRoute = (props) => {
  const { user } = useContext(AuthContext);

  if (user.loggedin && user.role === "student") {
    return <Route path={props.path}>{props.children}</Route>;
  } else if (user.loggedin === true) return null;
  else {
    return <Redirect to="/" />;
  }
};

export default SecuredStudentRoute;
