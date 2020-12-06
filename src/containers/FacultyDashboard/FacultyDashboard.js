import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddExternalLink from "../../components/ExternalLinks/AddExternalLink/AddExternalLink";
import AddJob from "../../components/Jobs/AddJob/AddJob";
import AddTest from "../../components/TestLinks/AddTest/AddTest";
import AddAnnouncement from "../../components/Announcements/AddAnnouncement/AddAnnouncement";
import AnnouncementDetail from "../../components/Announcements/AnnouncementDetail/AnnouncementDetail";
import ViewAnnouncements from "../../components/Announcements/ViewAnnouncements/ViewAnnouncements";
import FacultyEditProfile from "../../components/FacultyEditProfile/FacultyEditProfile";
import FacultyMenu from "../../components/FacultyMenu/FacultyMenu";
import FacultyNavBar from "../../components/FacultyNavBar/FacultyNavBar";
import AddFile from "../../components/Files/AddFile/AddFile";
import ViewFiles from "../../components/Files/ViewFiles/ViewFiles";
import StudentDetail from "../../components/Students/StudentDetail/StudentDetail";
import ViewStudents from "../../components/Students/ViewStudents/ViewStudents";
import ViewExternalLinks from "../../components/ExternalLinks/ViewExternalLinks/ViewExternalLinks";
import ViewJobPostings from "../../components/Jobs/ViewJobs/ViewJobs";
import ViewTests from "../../components/TestLinks/ViewTests/ViewTests";

const FacultyDashboard = (props) => {
  let { path } = useRouteMatch();

  return (
    <div>
      <FacultyNavBar />
      <Switch>
        <Route exact path={path}>
          <FacultyMenu />
        </Route>
        <Route path={`${path}/editprofile`}>
          <FacultyEditProfile />
        </Route>

        <Route path={`${path}/addfile`}>
          <AddFile />
        </Route>

        <Route path={`${path}/addtest`}>
          <AddTest />
        </Route>
        <Route path={`${path}/addjob`}>
          <AddJob />
        </Route>
        <Route path={`${path}/addexternallink`}>
          <AddExternalLink />
        </Route>
        <Route path={`${path}/addannouncement`}>
          <AddAnnouncement />
        </Route>
        <Route path={`${path}/viewannouncement/:id`}>
          <AnnouncementDetail />
        </Route>
        <Route path={`${path}/viewannouncement`}>
          <ViewAnnouncements />
        </Route>
        <Route path={`${path}/viewexternallinks`}>
          <ViewExternalLinks />
        </Route>
        <Route path={`${path}/viewtests`}>
          <ViewTests />
        </Route>
        <Route path={`${path}/viewjobs`}>
          <ViewJobPostings />
        </Route>
        <Route path={`${path}/viewstudent/:id`}>
          <StudentDetail />
        </Route>
        <Route path={`${path}/viewstudent`}>
          <ViewStudents />
        </Route>
        <Route path={`${path}/files/:category`}>
          <ViewFiles limit={30} />
        </Route>
        <Route path={`${path}/files`}>
          <ViewFiles limit={30} />
        </Route>
      </Switch>
    </div>
  );
};

export default FacultyDashboard;
