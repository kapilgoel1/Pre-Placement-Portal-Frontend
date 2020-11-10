import React, {useState, useEffect} from 'react';
import './App.css';

// import StudentLogin from './containers/StudentLogin/StudentLogin';
import StudentDashboard from './containers/StudentDashboard/StudentDashboard';
import FacultyDashboard from './containers/FacultyDashboard/FacultyDashboard';
import FacultyEditProfile from './containers/FacultyEditProfile/FacultyEditProfile';
import StudentEditProfile from './containers/StudentEditProfile/StudentEditProfile'
import About from './components/About/About';
import Main from './containers/Main/Main';
import { Route, Switch, Redirect} from 'react-router-dom';

import SecuredFacultyRoute from './SecuredFacultyRoute'
import SecuredStudentRoute from './SecuredStudentRoute'
import AuthContext from './AuthContext'



const App = () => {


  const [loggedin, setloggedin] = useState(true)
  const [loading, setloading] = useState(false)
  const [userRole, setuserRole] = useState(null)

  useEffect(() => {  
      setloading(true);
      fetch('http://localhost:4000/user/details', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((result) => {
          if(result.role === 'faculty') { 
            setloggedin(true)        
            setuserRole(result.role)
          }  else if(result.role === 'student') { 
            setloggedin(true)        
            setuserRole(result.role)
          } else {
            setloggedin(false)
          }         
         setloading(false)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [loggedin])

 
  

 
  
  if(loading)
  return null
  else
  return (
    <div className="App">
    <Switch>      
      <AuthContext.Provider value={{loggedin: loggedin, userRole: userRole, setloggedin: setloggedin}}>
        <Route exact path="/">      
          <Main userRole={userRole} />    
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <About/>
        </Route>
        <SecuredFacultyRoute path="/facultydashboard">
          <FacultyDashboard  />
        </SecuredFacultyRoute>
        <SecuredFacultyRoute path="/facultyeditprofile">
          <FacultyEditProfile  />
        </SecuredFacultyRoute>
        <SecuredStudentRoute path="/studentdashboard">
          <StudentDashboard  />
        </SecuredStudentRoute>
        <SecuredStudentRoute path="/studenteditprofile">
          <StudentEditProfile  />
        </SecuredStudentRoute>
      </AuthContext.Provider>  
  </Switch>
    </div>
  );
}

export default App;
