import React, { useEffect } from "react";
import "./StudentDashboard.scss";
import { Switch, Route } from "react-router-dom";
import StudentNavBar from "../../components/StudentNavbar/StudentNavBar";
import StudentEditProfile from "../../components/StudentEditProfile/StudentEditProfile";
import StudentMenu from "../../components/StudentMenu/StudentMenu";
import ViewFiles from "../../components/Files/ViewFiles/ViewFiles";
import AnnouncementDetail from "../../components/Announcements/AnnouncementDetail/AnnouncementDetail";
import ViewAnnouncement from "../../components/Announcements/ViewAnnouncements/ViewAnnouncements";
import ViewExternalLinks from "../../components/ExternalLinks/ViewExternalLinks/ViewExternalLinks";
import ViewJobs from "../../components/Jobs/ViewJobs/ViewJobs";
import ViewInternships from "../../components/Internships/ViewInternships/ViewInternships";
import ResumeForm from "../../components/Resume/ResumeForm/ResumeForm";
import ViewTests from "../../components/TestLinks/ViewTests/ViewTests";
import PlacementPreparation from "../../components/StudentMenu/PlacementPreparation/PlacementPreparation";
import PracticeTests from "../../components/StudentMenu/PracticeTests/PracticeTests";
import ViewAssignments from "../../components/Files/ViewAssignments/ViewAssignments";
import SubmitAssignment from "../../components/Files/SubmitAssignment/SubmitAssignment";

const StudentDashboard = () => {
  useEffect(() => {});

  return (
    <div>
      <StudentNavBar />
      <Switch>
        <Route path={"/placementpreparation"}>
          <PlacementPreparation />
        </Route>
        <Route path={"/practicetests"}>
          <PracticeTests />
        </Route>
        <Route path={`/editprofile`}>
          <StudentEditProfile />
        </Route>
        <Route path={`/files/:category`}>
          <ViewFiles limit={30} />
        </Route>
        <Route path={`/viewannouncement/:id`}>
          <AnnouncementDetail />
        </Route>
        <Route path={`/viewannouncement`}>
          <ViewAnnouncement />
        </Route>
        <Route path={`/viewexternallinks`}>
          <ViewExternalLinks />
        </Route>
        <Route path={`/resumebuilder`}>
          <ResumeForm />
        </Route>
        <Route path={`/viewjobs`}>
          <ViewJobs />
        </Route>
        <Route path={`/viewinternships`}>
          <ViewInternships />
        </Route>
        <Route path={`/viewtests`}>
          <ViewTests />
        </Route>
        <Route path={`/viewassignments`}>
          <ViewAssignments />
        </Route>
        <Route path={`/submitassignment/:id`}>
          <SubmitAssignment />
        </Route>
        <Route path="/">
          <StudentMenu />
        </Route>
      </Switch>
    </div>
  );
};

export default StudentDashboard;
