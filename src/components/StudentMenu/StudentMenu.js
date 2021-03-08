import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import "./StudentMenu.scss";

function StudentMenu() {
  let history = useHistory();

  return (
    <>
      <div className="ocontainer">
        <div class="icontainer">
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
          <div class="icard" onClick={() => history.push("/resumebuilder")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Resume Builder</h3>
              <p>
                It allow you to plug in information and build a cohesive resume.
              </p>
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

          {/* <div class="icard">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Placement Stats</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt sapiente, voluptate consectetur ea, nihil modi maiores
                aperiam cumque iste corrupti porro.{" "}
              </p>
            </div>
          </div> */}
        </div>
        <DashboardAnnouncement />
      </div>
    </>
  );
}

export default StudentMenu;
