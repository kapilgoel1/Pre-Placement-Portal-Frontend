import React from 'react';
import './FacultyDashboard.css';
import {
    Row, 
    Col
} from 'reactstrap'; 

import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar';
import Footer from '../../components/Footer/Footer';

const FacultyDashboard = (props) => {

    const onAddNewRes = () => {
        props.history.push('/addnewresource');
    }

    const onAddNewJob = () => {
        props.history.push('/addnewjob');
    }

    const onAddNewTest = () => {
        props.history.push('/addnewtest');
    }

    const onViewJob = () => {
        console.log("view job button clicked");
    } 

    const onViewProfile = () => {
        console.log("view profile button clicked");
    } 

    const onViewAllResources = () => {
        props.history.push('/viewallresources');
    } 

    return (
        <div>
            <FacultyNavBar/>
            <div className="container">
                <Row>
                    <Col md={3}>
                        <div className="parentdiv1">
                            <div className="childdiv">
                            <button className="functionButtons" onClick={onAddNewRes}>ADD NEW RESOURCE</button>
                            </div>    
                        </div>
                        <div className="parentdiv2">
                            <div className="childdiv">
                                <button className="functionButtons" onClick={onViewProfile}>VIEW STUDENT PROFILE</button>
                            </div>
                        </div>
                    </Col>    
                    <Col md={3}>
                        <div className="parentdiv3">
                            <div className="childdiv"> 
                            <button className="functionButtons" onClick={onAddNewJob}>ADD NEW JOB/POSTINGS</button>
                            </div> 
                        </div>
                    
                        
                        <div className="parentdiv4">
                            <div className="childdiv"> 
                            <button className="functionButtons" onClick={onAddNewTest}>ADD NEW TEST</button>
                            </div>
                        </div>
                    </Col>    
                    <Col md={3}>
                        <div className="parentdiv5">
                            <div className="childdiv"> 
                                <button className="functionButtons" onClick={onViewJob}>VIEW NEW JOB/POSTINGS</button>
                            </div>
                        </div>
                        <div className="parentdiv6">
                            <div className="childdiv"> 
                                <button className="functionButtons" onClick={onViewAllResources}>VIEW ALL RESOURCES</button>
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