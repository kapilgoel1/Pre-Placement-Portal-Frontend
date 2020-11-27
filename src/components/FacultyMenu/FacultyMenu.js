import React from "react";
import { Row, Col } from "reactstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./FacultyMenu.scss";

function FacultyMenu() {
  let history = useHistory();
  let { url } = useRouteMatch();

  const onAddNewRes = () => {
    history.push(`${url}/addfile`);
  };

  const onAddNewJob = () => {
    history.push(`${url}/addjob`);
  };

  const onAddNewTest = () => {
    history.push(`${url}/addtest`);
  };

  const onAddExternalRes = () => {
    history.push(`${url}/addexternallink`);
  };

  const onAddAnnouncement = () => {
    history.push(`${url}/addannouncement`);
  };

  const onViewAnnouncement = () => {
    history.push(`${url}/viewannouncement`);
  };

  const onViewStudentsList = () => {
    history.push(`${url}/viewstudent`);
  };

  const onViewJob = () => {
    history.push(`${url}/viewjobs`);
  };

  const onViewAllResources = () => {
    history.push(`${url}/files`);
  };

  return (
    <div className="container">
      <Row>
        <Col md={3}>
          <div className="parentdiv1" onClick={onAddNewRes}>
            <div className="childdiv">
              <button className="functionButtons">ADD NEW RESOURCE</button>
            </div>
          </div>
          <div className="parentdiv2" onClick={onViewStudentsList}>
            <div className="childdiv">
              <button className="functionButtons">VIEW STUDENTS LIST</button>
            </div>
          </div>
          <div className="parentdiv3" onClick={onAddAnnouncement}>
            <div className="childdiv">
              <button className="functionButtons">ADD ANNOUNCEMENT</button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="parentdiv4" onClick={onAddNewJob}>
            <div className="childdiv">
              <button className="functionButtons">ADD NEW JOB/POSTINGS</button>
            </div>
          </div>

          <div className="parentdiv5" onClick={onAddNewTest}>
            <div className="childdiv">
              <button className="functionButtons">ADD NEW TEST</button>
            </div>
          </div>

          <div className="parentdiv6" onClick={onAddExternalRes}>
            <div className="childdiv">
              <button className="functionButtons">
                ADD EXTERNAL RESOURCES/WEBLINKS
              </button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="parentdiv7" onClick={onViewJob}>
            <div className="childdiv">
              <button className="functionButtons">VIEW NEW JOB/POSTINGS</button>
            </div>
          </div>
          <div className="parentdiv8" onClick={onViewAllResources}>
            <div className="childdiv">
              <button className="functionButtons">VIEW ALL RESOURCES</button>
            </div>
          </div>

          <div className="parentdiv9" onClick={onViewAnnouncement}>
            <div className="childdiv">
              <button className="functionButtons">
                VIEW ALL ANNOUNCEMENTS
              </button>
            </div>
          </div>
        </Col>

        <Col md={3}>
          <div className="schedule" align="center">
            SCHEDULES <br />
          </div>
          <div className="notices" align="center">
            NOTICE 1 <br />
            NOTICE 2 <br />
            NOTICE 3 <br />
            NOTICE 1 <br />
            NOTICE 2 <br />
            NOTICE 3 <br />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FacultyMenu;
