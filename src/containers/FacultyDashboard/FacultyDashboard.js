import React from 'react';
import './FacultyDashboard.css';
import {Row, Col} from 'reactstrap'; 

import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar';
import ModalExample from '../../components/AddNewResModal/ModelExample';
import AddNewTestModal from '../../components/AddNewTestModal/AddNewTestModal';
import AddNewJobModal from '../../components/AddNewJobModal/AddNewJobModal';
import Footer from '../../components/Footer/Footer';
import AddNote from '../../components/AddNote/AddNote';
import Calendar from '../../components/Calender/Calendar';
const FacultyDashboard = (props) => {

    const onViewJob = () => {
        console.log("view job button clicked");
    } 

    const onViewProfile = () => {
        console.log("view profile button clicked");
    } 

    return (
        <div>
        <FacultyNavBar/>
            <div className="container">
            <Row>
                <Col md={4}>
                    <div className="calendar_n_note">
                        <Calendar/>
                        <AddNote/>
                    </div>
                </Col>
                <Col md={4}>
                    <div> 
                        <ModalExample buttonLabel="ADD NEW RESOURCES"/>
                        <hr/>
                        <AddNewJobModal buttonLabel="ADD NEW JOB POSTINGS"/>
                        <hr/>
                        <button className="functionButtons" onClick={onViewJob}>VIEW NEW JOB POSTINGS</button>
                        <hr/>
                        <button className="functionButtons" onClick={onViewProfile}>VIEW STUDENT PROFILE</button> 
                        <hr/>
                        <AddNewTestModal buttonLabel="ADD NEW TEST"/>
                        <hr/>
                    </div>
                </Col>
                <Col md={4}>
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

export default FacultyDashboard;