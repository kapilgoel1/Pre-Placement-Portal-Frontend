import React from 'react';
import './Main.css';
import Slider from '../../components/Slider/Slider';
import LoginModal from '../../components/LoginModal/LoginModal';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import GalleryLogo from '../../components/GalleryLogo/GalleryLogo';

const Main = () => {
            
    return (
        <div className="Main">
            <Logo/>
            <b>
            <div align= 'center'>                                          {/*Title of Website*/}
            <h1 style= {{
                        fontFamily: "Poppins", 
                        fontSize: "300%", 
                        fontWeight: "bold",
                        color: "midnightblue", 
                        }}> Jagan Institute of Management Studies </h1>
            
            <h3 style={{fontSize: "120%"}}> 3, Institutional Area, Sector-5, Rohini (Near Rithala Metro Station), Delhi-110085 </h3>
            </div>

            <div style={{marginLeft: '42%'}}>                              {/* Heading margin */}
            <h2 style= {{fontFamily: "initial",
                        fontWeight: "bold",
                        }}> Pre-Placement Portal </h2> 
            </div>
            </b>

            <div className="button" align="right" > 
                <LoginModal/>                                              {/*About Login Button */}
             </div>
            
            <Slider/>                                                      {/* For access the slider */}    

            <div className='acc' align='center'>
                <h2 style ={{fontFamily: "initial",
                            fontWeight: 'bold'}}
                > 
                    ACCREDITATION AND APPROVALS 
                </h2>                                                      {/* College info */}
                <GalleryLogo/>
            </div>  
               
            <Footer/>                                                      {/* For access the footer file*/}
        </div> 
    );
}

export default Main;