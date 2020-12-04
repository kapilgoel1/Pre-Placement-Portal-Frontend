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

  // const onViewAnnouncement = () => {
  //   history.push(`${url}/viewannouncement`);
  // };

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
          <div className="parentdiv parentdiv1" onClick={onAddNewRes}>
            <div className="card-overlay"></div>
            <div className="card-description">Add File</div>
          </div>
          <div className="parentdiv parentdiv2" onClick={onViewStudentsList}>
            <div className="card-overlay"></div>
            <div className="card-description">View Students List</div>
          </div>
        </Col>
        <Col md={3}>
          <div className="parentdiv parentdiv3" onClick={onAddAnnouncement}>
            <div className="card-overlay"></div>
            <div className="card-description">Add Announcement</div>
          </div>
          <div className="parentdiv parentdiv4" onClick={onAddNewJob}>
            <div className="card-overlay"></div>
            <div className="card-description">Add Job Postings</div>
          </div>
        </Col>
        <Col md={3}>
          <div className="parentdiv parentdiv5" onClick={onAddNewTest}>
            <div className="card-overlay"></div>
            <div className="card-description">Add Test</div>
          </div>
          <div className="parentdiv parentdiv6" onClick={onAddExternalRes}>
            <div className="card-overlay"></div>
            <div className="card-description">Add External Weblinks</div>
          </div>

          {
            // <div className="parentdiv9" onClick={onViewAnnouncement}>
            //   <div className="childdiv">
            //     <button className="functionButtons">
            //       VIEW ALL ANNOUNCEMENTS
            //     </button>
            //   </div>
            // </div>
          }
        </Col>
        <Col md={3}>
          <div className="parentdiv parentdiv7" onClick={onViewJob}>
            <div className="card-overlay"></div>
            <div className="card-description">View Job Postings</div>
          </div>
          <div className="parentdiv parentdiv8" onClick={onViewAllResources}>
            <div className="card-overlay"></div>
            <div className="card-description">View All Files</div>
          </div>
        </Col>
        {
          // <Col md={3} className="schedule">
          //   <div align="center">
          //     SCHEDULES <br />
          //   </div>
          //   <div className="notices" align="center">
          //     NOTICE 1 <br />
          //     NOTICE 2 <br />
          //     NOTICE 3 <br />
          //     NOTICE 1 <br />
          //     NOTICE 2 <br />
          //     NOTICE 3 <br />
          //   </div>
          // </Col>
        }
      </Row>

      {
        //   <div className="cards-list">
        //     <div className="mycard 1" onClick={onAddNewRes}>
        //       <div className="card_image">
        //         {" "}
        //         <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
        //       </div>
        //       <div className="card_title title-white">
        //         <p>ADD RESOURCE</p>
        //       </div>
        //     </div>
        //     <div className="mycard 1" onClick={onViewStudentsList}>
        //       <div className="card_image">
        //         {" "}
        //         <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
        //       </div>
        //       <div className="card_title title-white">
        //         <p>STUDENTS LIST</p>
        //       </div>
        //     </div>
        //     <div className="mycard 1">
        //       <div className="card_image" onClick={onAddAnnouncement}>
        //         {" "}
        //         <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
        //       </div>
        //       <div className="card_title title-white">
        //         <p>ADD ANNOUNCEMENT</p>
        //       </div>
        //     </div>
        //     <div className="mycard 1" onClick={onAddNewJob}>
        //       <div className="card_image">
        //         {" "}
        //         <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
        //       </div>
        //       <div className="card_title title-white">
        //         <p>ADD JOB</p>
        //       </div>
        //     </div>
        //     <div className="mycard 1" onClick={onAddNewTest}>
        //       <div className="card_image">
        //         {" "}
        //         <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
        //       </div>
        //       <div className="card_title title-white">
        //         <p>ADD TEST</p>
        //       </div>
        //     </div>
        //     <div className="mycard 1" onClick={onAddExternalRes}>
        //       <div className="card_image">
        //         {" "}
        //         <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
        //       </div>
        //       <div className="card_title title-white">
        //         <p>ADD EXTERNAL LINK</p>
        //       </div>
        //     </div>
        //     <div className="mycard 1" onClick={onViewJob}>
        //       <div className="card_image">
        //         {" "}
        //         <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
        //       </div>
        //       <div className="card_title title-white">
        //         <p>JOB POSTINGS</p>
        //       </div>
        //     </div>
        //     <div className="mycard 1" onClick={onViewAllResources}>
        //       <div className="card_image">
        //         {" "}
        //         <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
        //       </div>
        //       <div className="card_title title-white">
        //         <p>VIEW ALL RESOURCES</p>
        //       </div>
        //     </div>
        //   </div>
      }
    </div>
  );
}

export default FacultyMenu;
