import React from "react";
import "./StudentDashboard.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StudentNavBar from "../../components/StudentNavbar/StudentNavBar";
import StudentMenu from "../../components/StudentMenu/StudentMenu";
import Footer from "../../components/Footer/Footer";
import FileList from "../../components/FileList/FileList";
import ViewAnnouncement from "../../components/ViewAnnouncements/ViewAnnouncements";
import ViewExternalRes from "../../components/ViewExternalRes/ViewExternalRes";
import ViewAllTests from "../../components/ViewAllTests/ViewAllTests";
import ViewAllJobs from "../../components/ViewJobPostings/ViewJobPostings";

const StudentDashboard = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <StudentNavBar />
      <Switch>
        <Route exact path={path}>
          <StudentMenu />
        </Route>
        <Route path={`${path}/files/:category`}>
          <FileList limit={10} />
        </Route>
        <Route path={`${path}/viewannouncement`}>
          <ViewAnnouncement />
        </Route>
        <Route path={`${path}/viewexternalres`}>
          <ViewExternalRes />
        </Route>
        <Route path={`${path}/viewalltests`}>
          <ViewAllTests />
        </Route>
        <Route path={`${path}/viewalljobs`}>
          <ViewAllJobs />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
