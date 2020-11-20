import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import FacultyMenu from '../../components/FacultyMenu/FacultyMenu'
import AddNewResource from '../AddNewResource/AddNewResource';
import AddAnnouncement from '../AddAnnouncements/AddAnnouncements';
import ViewAnnouncement from '../../components/ViewAnnouncements/ViewAnnouncements';
import ViewAnnouncementDetail from '../../components/ViewAnnouncements/ViewDetailAnnouncement/ViewDetailAnnouncement';
import ViewStudentList from '../ViewStudentList/ViewStudentList';
import ViewStudentProfile from '../ViewStudentList/ViewStudentProfile/ViewStudentProfile';
import AddNewTest from '../AddNewTest/AddNewTest';
import AddNewJob from '../AddNewJob/AddNewJob';
import AddExternalRes from '../AddExternalRes/AddExternalRes';
import FileList from '../../components/FileList/FileList';
import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar';
import Footer from '../../components/Footer/Footer';

const FacultyDashboard = (props) => {

    let { path } = useRouteMatch();

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
            <Route path={`${path}/addnewtest`}>
              <AddNewTest />
            </Route>
            <Route path={`${path}/addnewjob`}>
              <AddNewJob />
            </Route>
            <Route path={`${path}/addexternalres`}>
              <AddExternalRes />
            </Route>
            <Route path={`${path}/addannouncement`}>
              <AddAnnouncement />
            </Route>
            <Route path={`${path}/viewannouncement/:id`}>
              <ViewAnnouncementDetail />
            </Route>
            <Route path={`${path}/viewannouncement`}>
              <ViewAnnouncement />
            </Route>
            <Route path={`${path}/viewstudentlist/:id`}>
              <ViewStudentProfile />
            </Route>
            <Route path={`${path}/viewstudentlist`}>
              <ViewStudentList />
            </Route>
            <Route path={`${path}/files/:category`}>
              <FileList limit={10}/>
            </Route>
            <Route path={`${path}/viewallresources`}>
              <FileList limit={10}/>
            </Route>
          </Switch>
               
            <Footer/>
        </div>
    );
}

export default FacultyDashboard;