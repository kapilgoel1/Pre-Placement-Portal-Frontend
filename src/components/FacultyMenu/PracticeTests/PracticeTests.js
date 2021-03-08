import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";

function PlacementPreparation() {
  const history = useHistory();
  return (
    <div className="ocontainer">
      <div>
        <h1 className="text-center text-white mb-5 py-3">PRACTICE TESTS</h1>
        <div class="icontainer">
          <div class="icard" onClick={() => history.push("/files/testpaper")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Test Papers</h3>
              <p>You can check for uploaded test papers and test links here.</p>
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
              <p>Links to mock tests are available here.</p>
            </div>
          </div>
        </div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default PlacementPreparation;
