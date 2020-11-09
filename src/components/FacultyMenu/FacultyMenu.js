import React from 'react'
import {
    Row, 
    Col
} from 'reactstrap'; 
import { useHistory, useRouteMatch } from "react-router-dom";
import './FacultyMenu.css';


function FacultyMenu() {
    let history = useHistory();
    let { path, url } = useRouteMatch();

    const onAddNewRes = () => {
        history.push(`${url}/addnewresource`);
    }

    const onAddNewJob = () => {
        history.push('/addnewjob');
    }

    const onAddNewTest = () => {
        history.push('/addnewtest');
    }

    const onViewJob = () => {
        console.log("view job button clicked");
    } 

    const onViewProfile = () => {
        console.log("view profile button clicked");
    } 

    const onViewAllResources = () => {
        history.push('/viewallresources');
    } 

    return (
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
   

    )
}

export default FacultyMenu
