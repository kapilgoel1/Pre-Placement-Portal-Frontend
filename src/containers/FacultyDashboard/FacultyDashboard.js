import React from "react";
import { Route, Switch } from "react-router-dom";
import AddAnnouncement from "../../components/Announcements/AddAnnouncement/AddAnnouncement";
import AnnouncementDetail from "../../components/Announcements/AnnouncementDetail/AnnouncementDetail";
import ViewAnnouncements from "../../components/Announcements/ViewAnnouncements/ViewAnnouncements";
import AddExternalLink from "../../components/ExternalLinks/AddExternalLink/AddExternalLink";
import ViewExternalLinks from "../../components/ExternalLinks/ViewExternalLinks/ViewExternalLinks";
import FacultyEditProfile from "../../components/FacultyEditProfile/FacultyEditProfile";
import AddContent from "../../components/FacultyMenu/AddContent/AddContent";
import FacultyMenu from "../../components/FacultyMenu/FacultyMenu";
import PlacementPreparation from "../../components/FacultyMenu/PlacementPreparation/PlacementPreparation";
import PracticeTests from "../../components/FacultyMenu/PracticeTests/PracticeTests";
import ViewContent from "../../components/FacultyMenu/ViewContent/ViewContent";
import FacultyNavBar from "../../components/FacultyNavBar/FacultyNavBar";
import AddFile from "../../components/Files/AddFile/AddFile";
import ViewFiles from "../../components/Files/ViewFiles/ViewFiles";
import AddJob from "../../components/Jobs/AddJob/AddJob";
import ViewJobs from "../../components/Jobs/ViewJobs/ViewJobs";
import ViewInternships from "../../components/Internships/ViewInternships/ViewInternships";
import StudentDetail from "../../components/Students/StudentDetail/StudentDetail";
import ViewStudents from "../../components/Students/ViewStudents/ViewStudents";
import AddTest from "../../components/TestLinks/AddTest/AddTest";
import ViewTests from "../../components/TestLinks/ViewTests/ViewTests";
import ViewApplicants from "../../components/Jobs/ViewApplicants/ViewApplicants";
import InternshipApplicants from "../../components/Internships/IntershipApplicants/IntershipApplicants";
import AddInternship from "../../components/Internships/AddInternship/AddInternship";

const FacultyDashboard = () => {
  return (
    <div>
      <FacultyNavBar />
      <Switch>
        <Route path="/addcontent">
          <AddContent />
        </Route>
        <Route path="/viewcontent">
          <ViewContent />
        </Route>

        <Route path={`/editprofile`}>
          <FacultyEditProfile />
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
        <Route path={`/addinternship`}>
          <AddInternship />
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
          <ViewJobs />
        </Route>
        <Route path={`/viewinternships`}>
          <ViewInternships />
        </Route>
        <Route path={`/viewapplicants/:id`}>
          <ViewApplicants />
        </Route>
        <Route path={`/internshipapplicants/:id`}>
          <InternshipApplicants />
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
          <FacultyMenu />
        </Route>
      </Switch>
    </div>
  );
};

export default FacultyDashboard;
