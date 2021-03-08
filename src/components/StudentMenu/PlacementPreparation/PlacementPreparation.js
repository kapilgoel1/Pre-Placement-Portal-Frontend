import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";

function PlacementPreparation() {
  const history = useHistory();
  return (
    <div className="ocontainer">
      <div>
        <h1 className="text-center text-white mb-5 py-3">
          Placement Preparation Content
        </h1>
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
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default PlacementPreparation;
