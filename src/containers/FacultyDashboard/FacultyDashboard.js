import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import FacultyMenu from '../../components/FacultyMenu/FacultyMenu'
    import {
        Row, 
        Col
    } from 'reactstrap'; 
    import AddNewResource from '../AddNewResource/AddNewResource';

import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar';
import Footer from '../../components/Footer/Footer';

const FacultyDashboard = (props) => {

    let { path, url } = useRouteMatch();

    
    return (
        <div>
            <FacultyNavBar/>
            <Switch>
            <Route exact path={path}>
              <FacultyMenu />
            </Route>
            <Route path={`${path}/addnewresource`}>
            <AddNewResource />
          </Route>
          </Switch>
               
            <Footer/>
        </div>
    );
}

export default FacultyDashboard;