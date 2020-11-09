import React, {useState, useEffect} from 'react';
import './App.css';

// import StudentLogin from './containers/StudentLogin/StudentLogin';
import StudentDashboard from './containers/StudentDashboard/StudentDashboard';
import FacultyDashboard from './containers/FacultyDashboard/FacultyDashboard';
import StudentEditProfile from './containers/StudentEditProfile/StudentEditProfile';
import FacultyEditProfile from './containers/FacultyEditProfile/FacultyEditProfile';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Main from './containers/Main/Main';
import ViewResources from './containers/ViewResources/ViewResources';
import { Route, Switch, withRouter, Redirect, useLocation} from 'react-router-dom';
import AddNewResource from './containers/AddNewResource/AddNewResource';
import AddNewJob from './containers/AddNewJob/AddNewJob';
import AddNewTest from './containers/AddNewTest/AddNewTest';
import ViewAllResources from './containers/ViewAllResources/ViewAllResources';
import Auth from './components/Auth/Auth';
import SecuredRoute from './SecuredRoute'




const App = () => {


  const location = useLocation()
  const [loggedin, setloggedin] = useState(false)
  const [loading, setloading] = useState(true)

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
          if(result.password) 
            setloggedin(true)          
         else
         setloggedin(false)
         setloading(false)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [location, loggedin])

 
  
  const PrivateRoute = ({component: Component, ...rest}) => 
  (<Route {...rest} render={props => Auth.getAuth()
    ? (<Component {...props} /> ) 
    : (<Redirect to={{ pathname: "/" }} /> )
   } />
  );

  let routes = (
    <Switch>
      <Route exact path="/">
       <Main loggedin={loggedin}/>
      </Route>
      {/* <Route path="/studentlogin" component={StudentLogin} />  */}
      <PrivateRoute path="/studentdashboard" component={StudentDashboard} />
      <SecuredRoute path="/facultydashboard" loggedin={loggedin}>
        <FacultyDashboard  />
      </SecuredRoute>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <PrivateRoute path="/studenteditprofile" component={StudentEditProfile} />
      <PrivateRoute path="/facultyeditprofile" component={FacultyEditProfile} />
      <PrivateRoute path="/addnewresource" component={AddNewResource}/>
      <PrivateRoute path="/addnewjob" component={AddNewJob}/>
      <PrivateRoute path="/addnewtest" component={AddNewTest}/>
      <PrivateRoute path="/viewallresources" component={ViewAllResources}/>

      <PrivateRoute path="/testpaper">
        <ViewResources category="testpaper" />
      </PrivateRoute>
      <PrivateRoute path="/notes">
        <ViewResources category="notes" />
      </PrivateRoute>
      <PrivateRoute path="/assignment">
        <ViewResources category="assignment" />
      </PrivateRoute>
      <PrivateRoute path="/ppt">
        <ViewResources category="ppt" />
      </PrivateRoute>
      <PrivateRoute path="/video">
        <ViewResources category="video" />
      </PrivateRoute>

      <Redirect to="/"/>
    </Switch>
  );
  
  if(loading)
  return null
  else
  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default App;
