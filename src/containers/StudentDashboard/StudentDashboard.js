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
                <Col md={2}>
                    <div>
                    </div>
                </Col>
                <Col md={8}>
                    <div> 
                <button className="functionButtons">RESUME BUILDER</button>
                <hr/>
                <button className="functionButtons">VIEW PROGRESS REPORT</button>
                <hr/>
                <button className="functionButtons">VIEW TEST SCHEDULE</button>
                <hr/>
                <button className="functionButtons">VIEW NEW JOB/POSTINGS</button> 
                <hr/>
                <button className="functionButtons">VIEW FEEDBACK</button> 
                <hr/>
            </div>
            </Col>
                <Col md={2}>
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