import React from 'react';
import './FacultyDashboard.css';
import {
    Row, 
    Col
} from 'reactstrap'; 

import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar';
import ModalExample from '../../components/AddNewResModal/ModelExample';
import AddNewTestModal from '../../components/AddNewTestModal/AddNewTestModal';
import AddNewJobModal from '../../components/AddNewJobModal/AddNewJobModal';
import Footer from '../../components/Footer/Footer';

const FacultyDashboard = (props) => {

    const onViewJob = () => {
        console.log("view job button clicked");
    } 

    const onViewProfile = () => {
        console.log("view profile button clicked");
    } 

    const onViewAllResources = () => {
        console.log("view all resources button clicked");
    } 

    return (
        <div>
            <FacultyNavBar/>
            <div className="container">
                <Row>
                    <Col md={3}>
                        <div className="parentdiv1">
                            <div className="childdiv">
                                <ModalExample buttonLabel="ADD NEW RESOURCES"></ModalExample>
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
                                <AddNewJobModal buttonLabel="ADD NEW JOB/POSTINGS"><i class="fas fa-box-open"></i></AddNewJobModal>
                            </div> 
                        </div>
                    
                        
                        <div className="parentdiv4">
                            <div className="childdiv"> 
                                <AddNewTestModal buttonLabel="ADD NEW TEST"/>
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