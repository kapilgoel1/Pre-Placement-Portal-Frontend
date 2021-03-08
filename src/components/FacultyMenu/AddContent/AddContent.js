import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";
// import './FacultyMenu.scss';

function AddContent() {
  let history = useHistory();

  return (
    <div>
      <div className="content">
        <h2 align="center">ADD CONTENT</h2>
      </div>
      <div className="ocontainer">
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
        <DashboardAnnouncement />
      </div>
    </div>
  );
}

export default AddContent;
