import React from 'react';
import './StudentDashboard.css';
import {Row, Col} from 'reactstrap'; 

import StudentNavBar from '../../components/StudentNavbar/StudentNavBar';
import Footer from '../../components/Footer/Footer';

const StudentDashboard = (props) => {

    return (
        <div>
         <StudentNavBar/> 
         <div className="container">
            <Row>
                <Col md={3}>
                    <div className="parentdiv7">
                        <div className="childdiv">
                            <button className="functionButtons">RESUME BUILDER</button>
                        </div>    
                    </div>
                    <div className="parentdiv8">
                        <div className="childdiv">
                            <button className="functionButtons">VIEW PROGRESS REPORT</button>
                        </div>
                    </div>
                </Col>
                <Col md={3}>    
                    <div className="parentdiv9">
                        <div className="childdiv"> 
                            <button className="functionButtons">VIEW TEST SCHEDULE</button>
                        </div> 
                    </div>
                    <div className="parentdiv10">
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
                        SCHEDULES <br/>
                    </div>
                    <div className="notices" align="center">
                        NOTICE 1 <br/>
                        NOTICE 2 <br/>
                        NOTICE 3 <br/>
                    </div>
                </Col>
            </Row>
        </div>
        <Footer/>
        </div>
    );
}

export default StudentDashboard;