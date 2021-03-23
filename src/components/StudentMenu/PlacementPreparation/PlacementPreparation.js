import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import "./PlacementPreparation.scss";

function PlacementPreparation() {
  const history = useHistory();
  return (
    <div className="ocontainer">
      <div className="mcontainer">
        <Breadcrumb className="bread">
          <BreadcrumbItem className="bread__item">
            <Link to="/" className="text-color3">
              Home
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>Placement Preparation</BreadcrumbItem>
        </Breadcrumb>
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
              <h3>Online Resources</h3>
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
