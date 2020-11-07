import React from 'react';
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
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import AddNewResource from './containers/AddNewResource/AddNewResource';
import AddNewJob from './containers/AddNewJob/AddNewJob';
import AddNewTest from './containers/AddNewTest/AddNewTest';
import Auth from './components/Auth/Auth';

const app = () => {

  const PrivateRoute = ({component: Component, ...rest}) => 
  (<Route {...rest} render={props => Auth.getAuth()
    ? (<Component {...props} /> ) 
    : (<Redirect to={{ pathname: "/" }} /> )
   } />
  );

  let routes = (
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route path="/studentlogin" component={StudentLogin} />  */}
      <PrivateRoute path="/studentdashboard" component={StudentDashboard} />
      <PrivateRoute path="/facultydashboard" component={FacultyDashboard} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <PrivateRoute path="/studenteditprofile" component={StudentEditProfile} />
      <PrivateRoute path="/facultyeditprofile" component={FacultyEditProfile} />
      <PrivateRoute path="/addnewresource" component={AddNewResource}/>
      <PrivateRoute path="/addnewjob" component={AddNewJob}/>
      <PrivateRoute path="/addnewtest" component={AddNewTest}/>

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

  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default withRouter(app);
