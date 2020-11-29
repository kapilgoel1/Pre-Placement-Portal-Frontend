import React from "react";
import { Row, Col } from "reactstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./StudentMenu.scss";

function StudentMenu() {
  let history = useHistory();
  let { url } = useRouteMatch();

  const onViewJob = () => {
    history.push(`${url}/viewalljobs`);
  };

  const onViewResource = (category) => {
    history.push(`${url}/files/${category}`);
  };

  return (
    <div className="container">
      {
        // <Row>
        //   <Col md={3}>
        //     <div className="parentdiv12">
        //       <div className="childdiv">
        //         <button className="functionButtons">RESUME BUILDER</button>
        //       </div>
        //     </div>
        //     <div className="parentdiv13">
        //       <div className="childdiv">
        //         <button className="functionButtons">VIEW PROGRESS REPORT</button>
        //       </div>
        //     </div>
        //   </Col>
        //   <Col md={3}>
        //     <div className="parentdiv14">
        //       <div className="childdiv">
        //         <button className="functionButtons">VIEW TEST SCHEDULE</button>
        //       </div>
        //     </div>
        //     <div className="parentdiv10" onClick={onViewJob}>
        //       <div className="childdiv">
        //         <button className="functionButtons">VIEW NEW JOB/POSTINGS</button>
        //       </div>
        //     </div>
        //   </Col>
        //   <Col md={3}>
        //     <div className="parentdiv11">
        //       <div className="childdiv">
        //         <button className="functionButtons">VIEW FEEDBACK</button>
        //       </div>
        //     </div>
        //   </Col>
        //   <Col md={3}>
        //     <div className="schedule" align="center">
        //       SCHEDULES <br />
        //     </div>
        //     <div className="notices" align="center">
        //       NOTICE 1 <br />
        //       NOTICE 2 <br />
        //       NOTICE 3 <br />
        //     </div>
        //   </Col>
        // </Row>
      }
      <div className="cards-list">
        <div className="mycard 1" onClick={() => onViewResource("testpaper")}>
          <div className="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="card_title title-white">
            <p>Test Papers</p>
          </div>
        </div>
        <div className="mycard 1" onClick={() => onViewResource("notes")}>
          <div className="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="card_title title-white">
            <p>Notes</p>
          </div>
        </div>
        <div className="mycard 1">
          <div className="card_image" onClick={() => onViewResource("video")}>
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="card_title title-white">
            <p>Videos</p>
          </div>
        </div>
        <div className="mycard 1" onClick={() => onViewResource("assignment")}>
          <div className="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="card_title title-white">
            <p>Assignments</p>
          </div>
        </div>
        <div className="mycard 1" onClick={() => onViewResource("ppt")}>
          <div className="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="card_title title-white">
            <p>PPTs</p>
          </div>
        </div>
        <div
          className="mycard 1"
          onClick={() => history.push(`${url}/viewexternallinks`)}
        >
          <div className="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="card_title title-white">
            <p>External Links</p>
          </div>
        </div>
        <div
          className="mycard 1"
          onClick={() => history.push(`${url}/viewtests`)}
        >
          <div className="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="card_title title-white">
            <p>Tests</p>
          </div>
        </div>
        <div
          className="mycard 1"
          onClick={() => history.push(`${url}/viewjobs`)}
        >
          <div className="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="card_title title-white">
            <p>Job Postings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentMenu;
