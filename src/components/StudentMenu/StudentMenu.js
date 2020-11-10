import React from 'react'
import {Row, Col} from 'reactstrap'; 
import './StudentMenu.css'

function StudentMenu() {
    return (
            
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
        
    )
}

export default StudentMenu


