import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import AddExternalLink from "../../components/ExternalLinks/AddExternalLink/AddExternalLink";
import AddJob from "../../components/Jobs/AddJob/AddJob";
import AddTest from "../../components/TestLinks/AddTest/AddTest";
import AddAnnouncement from "../../components/Announcements/AddAnnouncement/AddAnnouncement";
import AnnouncementDetail from "../../components/Announcements/AnnouncementDetail/AnnouncementDetail";
import ViewAnnouncements from "../../components/Announcements/ViewAnnouncements/ViewAnnouncements";
import AddFile from "../../components/Files/AddFile/AddFile";
import ViewFiles from "../../components/Files/ViewFiles/ViewFiles";
import StudentDetail from "../../components/Students/StudentDetail/StudentDetail";
import ViewStudents from "../../components/Students/ViewStudents/ViewStudents";
import ViewExternalLinks from "../../components/ExternalLinks/ViewExternalLinks/ViewExternalLinks";
import ViewJobPostings from "../../components/Jobs/ViewJobs/ViewJobs";
import ViewTests from "../../components/TestLinks/ViewTests/ViewTests";
import AddContent from "../../components/FacultyMenu/AddContent/AddContent";
import ViewContent from "../../components/FacultyMenu/ViewContent/ViewContent";
import PlacementPreparation from "../../components/FacultyMenu/PlacementPreparation/PlacementPreparation";
import PracticeTests from "../../components/FacultyMenu/PracticeTests/PracticeTests";

import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import AdminEditProfile from "../../components/AdminEditProfile/AdminEditProfile";
import CreateAccount from "../../components/CreareAccount/CreateAccount";
import ViewAccounts from "../../components/ManageAccounts/ViewAccounts/ViewAccounts";
import EditAccount from "../../components/ManageAccounts/EditAccount/EditAccount";

const AdminDashboard = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      <AdminNavBar />
      <Switch>
        <Route path="/addcontent">
          <AddContent />
        </Route>
        <Route path="/viewcontent">
          <ViewContent />
        </Route>
        <Route path={`/editprofile`}>
          <AdminEditProfile />
        </Route>
        <Route path={`/createaccount`}>
          <CreateAccount />
        </Route>
        <Route path={`/manageaccounts`}>
          <ViewAccounts />
        </Route>
        <Route path={`/editaccount/:id`}>
          <EditAccount />
        </Route>
        <Route path={`/addfile`}>
          <AddFile />
        </Route>

        <Route path={`/addtest`}>
          <AddTest />
        </Route>
        <Route path={`/addjob`}>
          <AddJob />
        </Route>
        <Route path={`/addexternallink`}>
          <AddExternalLink />
        </Route>
        <Route path={"/placementpreparation"}>
          <PlacementPreparation />
        </Route>
        <Route path={"/practicetests"}>
          <PracticeTests />
        </Route>
        <Route path={`/addannouncement`}>
          <AddAnnouncement />
        </Route>
        <Route path={`/viewannouncement/:id`}>
          <AnnouncementDetail />
        </Route>
        <Route path={`/viewannouncement`}>
          <ViewAnnouncements />
        </Route>
        <Route path={`/viewexternallinks`}>
          <ViewExternalLinks />
        </Route>
        <Route path={`/viewtests`}>
          <ViewTests />
        </Route>
        <Route path={`/viewjobs`}>
          <ViewJobPostings />
        </Route>
        <Route path={`/viewstudent/:id`}>
          <StudentDetail />
        </Route>
        <Route path={`/viewstudent`}>
          <ViewStudents />
        </Route>
        <Route path={`/files/:category`}>
          <ViewFiles limit={30} />
        </Route>
        <Route path={`/files`}>
          <ViewFiles limit={30} />
        </Route>
        <Route path="/">
          <AdminMenu />
        </Route>
      </Switch>
    </div>
  );
};

export default AdminDashboard;
