import React from "react";
import { useHistory } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import DashboardAnnouncement from "../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import "./FacultyMenu.scss";

function FacultyMenu() {
  let history = useHistory();

  return (
    <div className="ocontainer">
      <div className="mcontainer">
        <Breadcrumb className="bread">
          <BreadcrumbItem className="bread__item" active>
            Home
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="icontainer">
          <div className="icard" onClick={() => history.push("/addcontent")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Add Content</h3>
              <p>
                Here you can add contents such as Files, External resuorces,
                Mock test links and jobs.
              </p>
            </div>
          </div>

          <div className="icard" onClick={() => history.push("/viewcontent")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>View Content</h3>
              <p>
                Here you can view the content such as placement prep
                content(notes, online resources, etc), practice tests(test
                papers, test links), assignments and jobs.
              </p>
            </div>
          </div>

          <div className="icard" onClick={() => history.push("/viewstudent")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h3>Students Profiles</h3>
              <p>Personal information of all the students is available here.</p>
            </div>
          </div>
        </div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default FacultyMenu;
