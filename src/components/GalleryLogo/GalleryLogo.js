import React from "react";
import { Row, Col } from "reactstrap";
import logo1 from "../../assets/Logo1.jpg";
import logo2 from "../../assets/Logo2.jpg";
import logo3 from "../../assets/Logo3.jpg";
import logo4 from "../../assets/Logo4.jpg";
import logo5 from "../../assets/Logo5.jpg";
import logo6 from "../../assets/Logo6.jpg";

const GalleryLogo = () => {
  return (
    <Row>
      <Col sm={2}>
        <img className="logo1" src={logo1} height="75" alt=" NAAC GRADE A" />
      </Col>
      <Col sm={2}>
        <img className="logo2" src={logo2} height="75" alt=" NBA" />
      </Col>
      <Col sm={2}>
        <img className="logo3" src={logo3} height="75" alt=" SAQS" />
      </Col>
      <Col sm={2}>
        <img className="logo4" src={logo4} height="75" alt=" AICTE" />{" "}
      </Col>
      <Col sm={2}>
        <img className="logo5" src={logo5} height="75" alt=" MBA " />
      </Col>
      <Col sm={2}>
        <img className="logo6" src={logo6} height="75" alt=" FICCI " />
      </Col>
    </Row>
    // <div className="gallery">

    //     <img className="logo1" src={logo1} height='75' alt=" NAAC GRADE A"/>
    //     <img className="logo2" src={logo2} height='75' alt=" NBA"/>
    //     <img className="logo3" src={logo3} height='75' alt=" SAQS"/>
    //     <img className="logo4" src={logo4} height='75' alt=" AICTE"/>
    //     <img className="logo5" src={logo5} height='75' alt=" MBA "/>
    //     <img className="logo6" src={logo6} height='75' alt=" FICCI "/>

    // </div>
  );
};

export default GalleryLogo;
