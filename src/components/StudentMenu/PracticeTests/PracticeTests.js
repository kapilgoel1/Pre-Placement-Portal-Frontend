import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";

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

          <BreadcrumbItem active>Practice Tests</BreadcrumbItem>
        </Breadcrumb>
        <div className="icontainer">
          <div
            className="icard"
            onClick={() => history.push("/files/testpaper")}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Sample Test Papers</h3>
              <p>You can check for uploaded test papers and test links here.</p>
            </div>
          </div>

          <div className="icard" onClick={() => history.push("/viewtests")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Online Mock Tests</h3>
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
