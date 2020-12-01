import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AuthContext from "./AuthContext";

const SecuredFacultyRoute = (props) => {
  const { user } = useContext(AuthContext);

  if (user.loggedin && user.role === "faculty") {
    return <Route path={props.path}>{props.children}</Route>;
  } else if (user.loggedin === true) return null;
  else {
    return <Redirect to="/" />;
  }
};

export default SecuredFacultyRoute;
