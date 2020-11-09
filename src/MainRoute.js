import React from 'react'
import { Redirect, Route } from 'react-router';



const MainRoute = (props) => {
    const loggedin = true;
    return (
        <>
      {
      loggedin ? 
      <Redirect to="/facultydashboard"/> :
      <Route exact path={props.path}>
        {props.children}
     </Route> 
      }
      </>
    )
  }

  export default MainRoute