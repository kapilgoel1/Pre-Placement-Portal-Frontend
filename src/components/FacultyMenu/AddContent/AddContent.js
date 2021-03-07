import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";
// import './FacultyMenu.scss';

function AddContent() {
  let history = useHistory();

  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
            </p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
            </p>
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

export default AddContent;
