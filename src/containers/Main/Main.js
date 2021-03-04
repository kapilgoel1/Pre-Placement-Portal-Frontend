import React, { useContext } from "react";
import Home from "../Home/home";
import "./Main.scss";
import { Redirect } from "react-router";
import AuthContext from "../../AuthContext";

const Main = () => {
  const { user } = useContext(AuthContext);

  //   if (user.role === "faculty" && user.loggedin) {
  //     return <Redirect to="/facultydashboard" />;
  //   } else if (user.role === "student" && user.loggedin) {
  //     return <Redirect to="/studentdashboard" />;
  //   } else if (user.loggedin === false) return <Home />;
  //   else {
  //     console.log("ss");
  //     return null;
  //   }
  // };

  return <Home />;
};
export default Main;
