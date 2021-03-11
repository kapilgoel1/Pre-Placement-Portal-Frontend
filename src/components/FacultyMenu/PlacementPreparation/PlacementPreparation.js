import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";

function PlacementPreparation() {
  const history = useHistory();
  return (
    <div className="ocontainer">
      <div className="mcontainer">
        <h2 className="text-center text-white mb-5 py-3">
          PLACEMENT PREP CONTENT
        </h2>

        <div class="icontainer">
          <div class="icard" onClick={() => history.push("/files/notes")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="content">
              <h3>Notes</h3>
              <p>All the uploaded notes are available here.</p>
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
              <p>The video lectures uploaded can be viewed here.</p>
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
              <p>The external links uploaded can be viewed here.</p>
            </div>
          </div>
        </div>
      </div>

      <DashboardAnnouncement />
    </div>
  );
}

export default PlacementPreparation;
