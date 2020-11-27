import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AuthContext from "./AuthContext";
import Main from "./containers/Main/Main";

const DefaultRoute = (props) => {
  const { user } = useContext(AuthContext);

  if (user.loggedin) {
    return (
      <Route path="/">
        <Main />
      </Route>
    );
  } else {
    console.log("aw");
    return null;
  }
};

export default DefaultRoute;
