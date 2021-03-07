import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";

function ViewContent() {
  let history = useHistory();

  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
            </p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
            </p>
          </div>
        </div>

        <div class="icard">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h3>Placement Stats</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
            </p>
          </div>
        </div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default ViewContent;
