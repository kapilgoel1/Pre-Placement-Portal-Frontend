import React from 'react'
import {
    Row, 
    Col
} from 'reactstrap'; 
import { useHistory, useRouteMatch } from "react-router-dom";
import './FacultyMenu.css';


function FacultyMenu() {
    let history = useHistory();
    let { url } = useRouteMatch();

    const onAddNewRes = () => {
        history.push(`${url}/addnewresource`);
    }

    const onAddNewJob = () => {
        history.push(`${url}/addnewjob`);
    }

    const onAddNewTest = () => {
        history.push(`${url}/addnewtest`);
    }

    const onAddExternalRes = () => {
        history.push(`${url}/addexternalres`);
    }

    const onAddAnnouncement = () => {
        history.push(`${url}/addannouncement`);
    }

    const onViewAnnouncement = () => {
        history.push(`${url}/viewannouncement`);
    }

    const onViewJob = () => {
        console.log("view job button clicked");
    } 

    const onViewProfile = () => {
        console.log("view profile button clicked");
    } 

    const onViewAllResources = () => {
        history.push(`${url}/viewallresources`);
    } 

 
    return (
        <div className="container">
        <Row>
            <Col md={3}>
                <div className="parentdiv1" onClick={onAddNewRes} >
                     <div className="childdiv">
                        <button className="functionButtons" >ADD NEW RESOURCE</button>
                    </div> 
                </div>
                <div className="parentdiv2" onClick={onViewProfile} >
                     <div className="childdiv">
                        <button className="functionButtons" >VIEW STUDENT PROFILE</button>
                    </div> 
                </div>
                <div className="parentdiv3" onClick={onAddAnnouncement} >
                     <div className="childdiv">
                        <button className="functionButtons" >ADD ANNOUNCEMENT</button>
                    </div> 
                </div>
            </Col>    
            <Col md={3}>
                <div className="parentdiv4" onClick={onAddNewJob} >
                    <div className="childdiv"> 
                        <button className="functionButtons" >ADD NEW JOB/POSTINGS</button>
                    </div>
                </div>
            
                <div className="parentdiv5" onClick={onAddNewTest} >
                     <div className="childdiv"> 
                        <button className="functionButtons" >ADD NEW TEST</button>
                    </div> 
                </div>

                <div className="parentdiv6" onClick={onAddExternalRes} >
                     <div className="childdiv"> 
                        <button className="functionButtons" >ADD EXTERNAL RESOURCES/WEBLINKS</button>
                    </div>
                </div>

            </Col>    
            <Col md={3}>
                <div className="parentdiv7" onClick={onViewJob} >
                     <div className="childdiv"> 
                        <button className="functionButtons" >VIEW NEW JOB/POSTINGS</button>
                    </div> 
                </div>
                <div className="parentdiv8" onClick={onViewAllResources}>
                     <div className="childdiv"> 
                        <button className="functionButtons" >VIEW ALL RESOURCES</button>
                    </div>
                </div>

                <div className="parentdiv9" onClick={onViewAnnouncement}>
                     <div className="childdiv"> 
                        <button className="functionButtons">VIEW ALL ANNOUNCEMENTS</button>
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
   

    )
}

export default FacultyMenu
