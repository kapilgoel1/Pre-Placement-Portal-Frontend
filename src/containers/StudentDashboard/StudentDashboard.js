import React from "react";
import "./StudentDashboard.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StudentNavBar from "../../components/StudentNavbar/StudentNavBar";
import StudentEditProfile from "../../components/StudentEditProfile/StudentEditProfile";
import StudentMenu from "../../components/StudentMenu/StudentMenu";
import ViewFiles from "../../components/Files/ViewFiles/ViewFiles";
import AnnouncementDetail from "../../components/Announcements/AnnouncementDetail/AnnouncementDetail";
import ViewAnnouncement from "../../components/Announcements/ViewAnnouncements/ViewAnnouncements";
import ViewExternalLinks from "../../components/ExternalLinks/ViewExternalLinks/ViewExternalLinks";
import ViewTests from "../../components/TestLinks/ViewTests/ViewTests";
import ViewJobs from "../../components/Jobs/ViewJobs/ViewJobs";

const StudentDashboard = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <StudentNavBar />
      <Switch>
        <Route exact path={path}>
          <StudentMenu />
        </Route>
        <Route path={`${path}/editprofile`}>
          <StudentEditProfile />
        </Route>
        <Route path={`${path}/files/:category`}>
          <ViewFiles limit={30} />
        </Route>
        <Route path={`${path}/viewannouncement/:id`}>
          <AnnouncementDetail />
        </Route>
        <Route path={`${path}/viewannouncement`}>
          <ViewAnnouncement />
        </Route>
        <Route path={`${path}/viewexternallinks`}>
          <ViewExternalLinks />
        </Route>
        <Route path={`${path}/viewtests`}>
          <ViewTests />
        </Route>
        <Route path={`${path}/viewjobs`}>
          <ViewJobs />
        </Route>
      </Switch>
    </div>
  );
};

export default StudentDashboard;
