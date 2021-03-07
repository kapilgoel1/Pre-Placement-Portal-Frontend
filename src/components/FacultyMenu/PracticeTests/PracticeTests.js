import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";

function PlacementPreparation() {
  const history = useHistory();
  return (
    <div className="ocontainer">
      <div class="icontainer">
        <div class="icard" onClick={() => history.push("/files/testpaper")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h3>Test Papers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
            </p>
          </div>
        </div>

        <div class="icard" onClick={() => history.push("/viewtests")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h3>Tests Links</h3>
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

export default PlacementPreparation;
