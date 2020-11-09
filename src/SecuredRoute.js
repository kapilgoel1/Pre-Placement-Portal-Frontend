import React from 'react'
import { Redirect, Route } from 'react-router';


const SecuredRoute = (props) => {
    const loggedin = props.loggedin;
    if(loggedin)
    return (
      <Route path={props.path}>
      {props.children}
      </Route>
    )
      else
      return (
      <Redirect to="/" />
      )
      }
      
   
  export default SecuredRoute;