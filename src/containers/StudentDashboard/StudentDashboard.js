import React from 'react';
import './StudentDashboard.css';
import {Switch, Route, useRouteMatch} from 'react-router-dom'


import StudentNavBar from '../../components/StudentNavbar/StudentNavBar';
import StudentMenu from '../../components/StudentMenu/StudentMenu'
import Footer from '../../components/Footer/Footer';
import FileList from '../../components/FileList/FileList'

const StudentDashboard = (props) => {
    let { path } = useRouteMatch();

    return (
        <div>
         <StudentNavBar/> 
         <Switch>
         <Route exact path={path}>
           <StudentMenu />
         </Route>
         <Route path={`${path}/files/:category`}>
           <FileList limit={10}/>
         </Route>
       </Switch>
         
        <Footer/>
        </div>
    );
}

export default StudentDashboard;