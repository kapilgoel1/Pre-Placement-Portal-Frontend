import React from 'react';
import './FacultyDashboard.css';
import {
    Row, 
    Col, 
    Card, 
    CardImg,
    CardBody
} from 'reactstrap'; 

import Image1 from '../../assets/img.jpg';
import Image2 from '../../assets/imgproject.jpg';
import Image3 from '../../assets/imgproject2.jpg';
import Image4 from '../../assets/imgproject3.jpg';
import Image5 from '../../assets/imgproject4.jpg';
import Image6 from '../../assets/imgproject5.jpg';

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

    return (
        <div>
        <FacultyNavBar/>
            <div className="container">
            <Row>
                <Col md={3}>
                    <div> 
                    <Card>
                        <CardImg top width="100%" src={Image1} alt="Card image cap" />
                        <CardBody>
                            <ModalExample buttonLabel="ADD NEW RESOURCES"></ModalExample>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={Image4} alt="Card image cap" />
                        <CardBody>
                        <button className="functionButtons" onClick={onViewProfile}>VIEW STUDENT PROFILE</button> 
                        </CardBody>
                    </Card>
                    
                    </div>
                </Col>

                <Col md={3}>
                    <div> 
                    <Card>
                        <CardImg top width="100%" src={Image2} alt="Card image cap" />
                        <CardBody>
                        <AddNewJobModal buttonLabel="ADD NEW JOB POSTINGS"><i class="fas fa-box-open"></i></AddNewJobModal>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={Image6} alt="Card image cap" />
                        <CardBody>
                        <AddNewTestModal buttonLabel="ADD NEW TEST"/>
                        </CardBody>
                    </Card>
                    </div>
                </Col>    
                <Col md={3}>
                    <div> 
                    <Card>
                        <CardImg top width="100%" src={Image3} alt="Card image cap" />
                        <CardBody>
                        <button className="functionButtons" onClick={onViewJob}>VIEW NEW JOB POSTINGS</button>
                        </CardBody>
                    </Card>
                    
                    </div>
                </Col>  
                
                  
                 {/* <ModalExample buttonLabel="ADD NEW RESOURCES"></ModalExample>
                        <hr/>
                        <AddNewJobModal buttonLabel="ADD NEW JOB POSTINGS"><i class="fas fa-box-open"></i></AddNewJobModal>
                        <hr/>
                        <button className="functionButtons" onClick={onViewJob}>VIEW NEW JOB POSTINGS</button>
                        <hr/>
                        <button className="functionButtons" onClick={onViewProfile}>VIEW STUDENT PROFILE</button> 
                        <hr/>
                        <AddNewTestModal buttonLabel="ADD NEW TEST"/>
                        <hr/> */}
                    
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