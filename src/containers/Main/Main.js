import React from 'react';
import './Main.css';

import {Row, Col} from 'reactstrap'; 
import LoginPic from '../../assets/LoginImg.jpg';
import Login from '../Login/Login';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import GalleryLogo from '../../components/GalleryLogo/GalleryLogo';

const Main = () => {
            
    return (
        <div className="Main">
            <div className="container1">
            <Row>
                <Col md={2}>
                    <div className="logodiv">
                    <Logo/>
                    </div>
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
            </Row>
            {/* <Row>
                <Col md={12}> */}
                    <div className="LoginContainer">
                        <div className="box">
                        <img 
                            src={LoginPic} 
                            alt={LoginPic}
                            height="80%"
                            width="100%"/>
                        </div>    
                        <div className="stack-top">
                            <Login/>
                        </div>
                    </div>
                {/* </Col>
            </Row> */}
            {/* </div>
            <div className="slider"> 
            <Slider/>  
            </div>  */}
            <Row>
                <Col md={12}>
                    <div className='acc' align="center">
                        Accreditation and approvals                                           
                        <div className="galleryPics">
                            <GalleryLogo/>
                        </div>
                    </div>
                </Col>  
            </Row>                                                         
              
            <Footer/>  
            </div>                                    
        </div> 
    );
}

export default Main;