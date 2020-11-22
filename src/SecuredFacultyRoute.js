import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import AuthContext from './AuthContext';

const SecuredFacultyRoute = (props) => {
  const {loggedin, userRole} = useContext(AuthContext);
    if(loggedin && userRole ==='faculty') {
      console.log('1 exec');
      return (
        <Route path={props.path}>
          {props.children}
        </Route>
      )
    }
    else if(loggedin === false) {
      console.log('2 exec');
      return (
        <Route path={props.path}>
          <Redirect to="/" />
        </Route>
      )
    }
    else if (userRole === 'student') {
      console.log('3 exec');
      return (
        <Route path={props.path}>
          <Redirect to="/studentdashboard" />
        </Route>
      )
    }
    else {
      console.log('4 exec');
      return null;
    }
}
      
export default SecuredFacultyRoute;