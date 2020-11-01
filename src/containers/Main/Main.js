import React from 'react';
import './Main.css';

import {Row, Col} from 'reactstrap'; 
import Slider from '../../components/Slider/Slider';
import LoginModal from '../../components/LoginModal/LoginModal';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import GalleryLogo from '../../components/GalleryLogo/GalleryLogo';

const Main = () => {
            
    return (
        <div className="Main">
            <div className="container1">
            <Row>
                <Col md={2}>
                    <div className="logodiv"></div>
                    <Logo/>
                </Col>  
                <Col md={8}>
                    <center>
                    <div className="head1">
                    Jagan Institute of Management Studies
                    </div>
                    <div className="head2">
                    3, Institutional Area, Sector-5, Rohini (Near Rithala Metro Station), Delhi-110085
                    </div>
                    <div className="head3"> 
                    Pre-Placement Portal
                    </div>
                    </center>
                </Col>
                <Col md={2}>
                    <div className="loginModal">
                    <LoginModal/>
                    </div>
                </Col>
            </Row>
            </div>
              
            <Slider/>  

            <Row>
                <Col md={12}>
                    <div className='acc' align="center">
                        Accreditation and approvals                                           
                    <GalleryLogo/>
                    </div>
                </Col>  
            </Row>                                                         
              
            <Footer/>                                      
        </div> 
    );
}

export default Main;