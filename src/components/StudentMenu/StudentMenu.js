import React from "react";
import { Row, Col } from "reactstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./StudentMenu.scss";

function StudentMenu() {
  let history = useHistory();
  let { url } = useRouteMatch();

  // const onViewJob = () => {
  //   history.push(`${url}/viewjobs`);
  // };

  const onViewResource = (category) => {
    history.push(`${url}/files/${category}`);
  };

  return (
    <div className="container">
      <Row>
        <Col md={3}>
          <div
            className="parentdiv parentdiv10"
            onClick={() => onViewResource("testpaper")}
          >
            <div className="card-overlay"></div>
            <div className="card-description">
              VIEW ALL TEST PAPERS <br />
              (Tests done by you)
            </div>
          </div>
          <div
            className="parentdiv parentdiv11"
            onClick={() => onViewResource("notes")}
          >
            <div className="card-overlay"></div>
            <div className="card-description">
              VIEW NOTES
              <br />
              (Provided by faculties)
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            className="parentdiv parentdiv12"
            onClick={() => onViewResource("video")}
          >
            <div className="card-overlay"></div>
            <div className="card-description">
              VIEW VIDEOS <br />
              (Provided by faculties)
            </div>
          </div>
          <div
            className="parentdiv parentdiv13"
            onClick={() => onViewResource("assignment")}
          >
            <div className="card-overlay"></div>
            <div className="card-description">
              VIEW ASSIGNMENTS <br />
              (To be done by you)
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            className="parentdiv parentdiv14"
            onClick={() => onViewResource("ppt")}
          >
            <div className="card-overlay"></div>
            <div className="card-description">
              VIEW PPTS <br />
              (Provided by faculties)
            </div>
          </div>
          <div
            className="parentdiv parentdiv15"
            onClick={() => history.push(`${url}/viewexternallinks`)}
          >
            <div className="card-overlay"></div>
            <div className="card-description">
              VIEW EXTERNAL LINKS <br />
              (For tests or notes)
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            className="parentdiv parentdiv16"
            onClick={() => history.push(`${url}/resumebuilder`)}
          >
            <div className="card-overlay"></div>
            <div className="card-description">
              RESUME BUILDER <br />
            </div>
          </div>
          <div
            className="parentdiv parentdiv17"
            onClick={() => history.push(`${url}/viewjobs`)}
          >
            <div className="card-overlay"></div>
            <div className="card-description">
              VIEW ALL JOBS <br />
              (Jobs you can apply for)
            </div>
          </div>
        </Col>
      </Row>
      {}
    </div>
  );
}

export default StudentMenu;
