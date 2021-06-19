import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import DashboardAnnouncement from "../../Announcements/DashboardAnnouncement/DashboardAnnouncement";
// import './FacultyMenu.scss';
import "./AddContent.scss";

function AddContent() {
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
          <BreadcrumbItem active>Add Content </BreadcrumbItem>
        </Breadcrumb>
        <div className="icontainer">
          <div className="icard" onClick={() => history.push("/addfile")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Add Notes, Assignments, etc.</h3>
              <p>
                Here you can upload the notes, assignments, etc. regarding any
                subject.
              </p>
            </div>
          </div>

          <div
            className="icard"
            onClick={() => history.push("/addexternallink")}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Add Online Resources</h3>
              <p>Here you can add any weblink or any other link.</p>
            </div>
          </div>

          <div className="icard" onClick={() => history.push("/addtest")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Add Online Mock Tests</h3>
              <p>Link for any kind of test can be added here.</p>
            </div>
          </div>
          <div className="icard" onClick={() => history.push("/addjob")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Post Jobs</h3>
              <p>
                You can add the description such as company, salary, eligibility
                requirements for job availabilities here.
              </p>
            </div>
          </div>

          {/* <div
            className="icard"
            onClick={() => {
              // history.push("/viewinternships");
              window.open("https://www.jimsindia.org/placement_login.aspx");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Link to JIMS Job Descriptions</h3>
              <p>You can click here for all the job content uploaded.</p> */}
          {/* <h3>Post Internships</h3>
              <p>
                You can add the description such as company, salary, eligibility
                requirements for job availabilities here.
              </p> */}
          {/* </div>
          </div> */}
        </div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default AddContent;
