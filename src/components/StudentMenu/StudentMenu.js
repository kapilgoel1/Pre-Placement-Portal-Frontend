import React from "react";
import { Row, Col } from "reactstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./StudentMenu.css";

function StudentMenu() {
  let history = useHistory();
  let { url } = useRouteMatch();

  const onViewJob = () => {
    history.push(`${url}/viewalljobs`);
  };

  return (
    <div className="container">
      <Row>
        <Col md={3}>
          <div className="parentdiv12">
            <div className="childdiv">
              <button className="functionButtons">RESUME BUILDER</button>
            </div>
          </div>
          <div className="parentdiv13">
            <div className="childdiv">
              <button className="functionButtons">VIEW PROGRESS REPORT</button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="parentdiv14">
            <div className="childdiv">
              <button className="functionButtons">VIEW TEST SCHEDULE</button>
            </div>
          </div>
          <div className="parentdiv10" onClick={onViewJob}>
            <div className="childdiv">
              <button className="functionButtons">VIEW NEW JOB/POSTINGS</button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="parentdiv11">
            <div className="childdiv">
              <button className="functionButtons">VIEW FEEDBACK</button>
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
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default StudentMenu;
