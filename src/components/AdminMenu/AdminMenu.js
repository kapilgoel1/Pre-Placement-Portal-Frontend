import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import "./AdminMenu.scss";

function AdminMenu() {
  let history = useHistory();

  return (
    <div className="ocontainer">
      <div className="mcontainer">
        <div class="icontainer">
          <div class="icard" onClick={() => history.push("/addcontent")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Add Content</h3>
              <p>
                Here you can add contents such as Files, External resuorces,
                Mock test links and jobs.
              </p>
            </div>
          </div>

          <div class="icard" onClick={() => history.push("/viewcontent")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>View Content</h3>
              <p>
                Here you can view the content such as placement prep
                content(notes, video lectures, etc), practice tests(test papers,
                test links), assignments and jobs.
              </p>
            </div>
          </div>

          <div class="icard" onClick={() => history.push("/viewstudent")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Students Profiles</h3>
              <p>Personal information of all the students is available here.</p>
            </div>
          </div>

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
        </div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default AdminMenu;
