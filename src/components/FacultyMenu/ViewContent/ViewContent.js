import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";

function ViewContent() {
  let history = useHistory();

  return (
    <div className="ocontainer">
      <div className="mcontainer">
        <Breadcrumb className="bread">
          <BreadcrumbItem className="bread__item">
            <Link to="/" className="text-color3">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>View Content </BreadcrumbItem>
        </Breadcrumb>
        <div className="icontainer">
          <div
            className="icard"
            onClick={() => history.push("/placementpreparation")}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Placement Preparation Content</h3>
              <p>
                Content such as notes, video lectures and external resources are
                available here.
              </p>
            </div>
          </div>

          <div className="icard" onClick={() => history.push("/practicetests")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Practice Tests</h3>
              <p>You can check for uploaded test papers and test links here.</p>
            </div>
          </div>

          <div
            className="icard"
            onClick={() => history.push("/viewassignments")}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Assignments</h3>
              <p>All the uploaded assignments are available here.</p>
            </div>
          </div>

          <div
            className="icard"
            onClick={() => {
              history.push("/viewjobs");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Jobs</h3>
              <p>You can click here for all the job content uploaded.</p>
            </div>
          </div>

          <div
            className="icard"
            onClick={() => {
              history.push("/viewinternships");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Internships</h3>
              <p>You can click here for all the job content uploaded.</p>
            </div>
          </div>
        </div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default ViewContent;
