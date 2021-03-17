import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import "./AdminMenu.scss";

function AdminMenu() {
  let history = useHistory();

  return (
    <div className="ocontainer">
      <div className="mcontainer">
        {/* <div class="icontainer" style={{ width: "100%" }}> */}
        <div class="icontainer">
          <div class="icard" onClick={() => history.push("/createaccount")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Create Account</h3>
              <p>
                You can make accounts of student and admin as you wish. Just
                fill in the basic details and click on create account.
              </p>
            </div>
          </div>

          <div class="icard" onClick={() => history.push("/manageaccounts")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Manage Account</h3>
              <p>
                All the accounts of faculties and students are displayed here.
                You can also edit the basic information of any acocunt.
              </p>
            </div>
          </div>
          <div
            class="icard"
            onClick={() => history.push("/placementpreparation")}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Placement Preparation Content</h3>
              <p>
                Content such as notes, video lectures and external resources are
                available here.
              </p>
            </div>
          </div>

          <div class="icard" onClick={() => history.push("/practicetests")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Practice Tests</h3>
              <p>You can check for uploaded test papers and test links here.</p>
            </div>
          </div>

          <div class="icard" onClick={() => history.push("/files/assignment")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Assignments</h3>
              <p>All the uploaded assignments are available here.</p>
            </div>
          </div>

          <div
            class="icard"
            onClick={() => {
              history.push("/viewjobs");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Jobs</h3>
              <p>You can click here for all the job content uploaded.</p>
            </div>
          </div>
          {/* </div>
        <div class="icontainer"> */}
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

export default AdminMenu;
