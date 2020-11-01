import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Row, Col} from 'reactstrap';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row>
          <Col md={6}>
          Jagan Institute of Management Studies <br/> 
          Tel : 011-45184000, 45184001, 45184002 <br/> 
          contact@jimsindia.org
          </Col>
          <Col md={6}>
            <div className="social-container">
              <a href="https://www.youtube.com/c/JIMSRohiniSector5"
              className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.facebook.com/JimsDelhi?sk=wall"
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com/JIMSRohini" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com/jimsrohinisector5/"
              className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </Col>
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved with JIMS
        </Row>
      </div>
    </div>
  );
}

export default FooterPage;