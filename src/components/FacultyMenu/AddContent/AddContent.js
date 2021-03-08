import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
// import './FacultyMenu.scss';

function AddContent() {
  let history = useHistory();

  return (
    <div className="ocontainer">
      <div className="mcontainer">
        <h1 className="text-center text-white mb-5 py-3">Add Content</h1>
        <div class="icontainer">
          <div class="icard" onClick={() => history.push("/addfile")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Add Files</h3>
              <p>
                Here you can add any file you want to share with the student in
                any format. For example, pdf, word, etc.
              </p>
            </div>
          </div>

          <div class="icard" onClick={() => history.push("/addexternallink")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Add External Resources</h3>
              <p>Here you can add any weblink or any other link.</p>
            </div>
          </div>

          <div class="icard" onClick={() => history.push("/addtest")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Add Test Links</h3>
              <p>Link for any kind of test can be added here.</p>
            </div>
          </div>
          <div class="icard" onClick={() => history.push("/addjob")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Add Jobs</h3>
              <p>
                You can add the description such as company, salary, eligibility
                requirements for job availabilities here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default AddContent;
