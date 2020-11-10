import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import AuthContext from './AuthContext'



const SecuredStudentRoute = (props) => {
  const {loggedin, userRole} = useContext(AuthContext);
    if(loggedin && userRole ==='student')
    {
      console.log('s 1 exec')
    return (
      <Route path={props.path}>
      {props.children}
      </Route>
    )
    }
      else if(loggedin === false)
      {
        console.log('s 2 exec')
      return (
        <Route path={props.path}>
      <Redirect to="/" />
      </Route>
      )
      }
      else if (userRole === 'faculty')
      {
        console.log('s 3 exec')
      return (
        <Route path={props.path}>
        <Redirect to="/facultydashboard" />
        </Route>
      )
      }
      else {
        console.log('s 4 exec')
      return null
      }
      }
      
   
  export default SecuredStudentRoute;