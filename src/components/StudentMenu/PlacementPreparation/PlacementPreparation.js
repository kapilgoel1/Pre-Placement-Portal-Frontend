import React from "react";
import "./PlacementPreparation.scss";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";

function PlacementPreparation() {
  const history = useHistory();
  return (
    <div>
      <div className="content">
        <h2 align="center">PLACEMENT PREPARATION</h2>
      </div>

      <div className="ocontainer">
        <div class="icontainer">
          <div class="icard" onClick={() => history.push("/files/notes")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Notes</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt sapiente, voluptate consectetur ea, nihil modi maiores
                aperiam cumque iste corrupti porro.{" "}
              </p>
            </div>
          </div>
          <div class="icard" onClick={() => history.push("/files/video")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Video Lectures</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt sapiente, voluptate consectetur ea, nihil modi maiores
                aperiam cumque iste corrupti porro.{" "}
              </p>
            </div>
          </div>
          <div class="icard" onClick={() => history.push("/viewexternallinks")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>External Resources</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt sapiente, voluptate consectetur ea, nihil modi maiores
                aperiam cumque iste corrupti porro.{" "}
              </p>
            </div>
          </div>
        </div>
        <DashboardAnnouncement />
      </div>
    </div>
  );
}

export default PlacementPreparation;
