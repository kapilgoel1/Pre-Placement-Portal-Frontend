import React from 'react';
import logo1 from '../../assets/Logo1.jpg';
import logo2 from '../../assets/Logo2.jpg';
import logo3 from '../../assets/Logo3.jpg';
import logo4 from '../../assets/Logo4.jpg';
import logo5 from '../../assets/Logo5.jpg';
import logo6 from '../../assets/Logo6.jpg';

const GalleryLogo = () => {
    return (
        <div className='gallery'>

            <img className="logo1" src={logo1} height='75' alt=" NAAC GRADE A"/> &nbsp; &nbsp; &nbsp;&nbsp; 
            <img className="logo2" src={logo2} height='75' alt=" NBA"/> &nbsp; &nbsp; &nbsp; &nbsp;
            <img className="logo3" src={logo3} height='75' alt=" SAQS"/> &nbsp; &nbsp; &nbsp; &nbsp;
            <img className="logo4" src={logo4} height='75' alt=" AICTE"/> &nbsp; &nbsp; &nbsp; &nbsp;
            <img className="logo5" src={logo5} height='75' alt=" MBA "/> &nbsp; &nbsp; &nbsp;  &nbsp;
            <img className="logo6" src={logo6} height='75' alt=" FICCI "/> &nbsp; &nbsp; &nbsp;  &nbsp;
            
        </div>
    );
}

export default GalleryLogo;