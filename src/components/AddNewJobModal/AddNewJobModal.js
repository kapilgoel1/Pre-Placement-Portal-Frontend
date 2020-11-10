import React, { useState } from 'react';
import './AddNewJobModal.css';
import { Label, Input, Button, FormGroup, Card, CardBody, Form } from 'reactstrap';

const AddNewJob = (props) => {

    const [company, setCompany] = useState(""); 
    const [jobprofile, setJobProfile] = useState("");
    const [packages, setPackages] = useState("");

    return (
        <div className="containerj">
            <Card className="job-upload-form">
                <CardBody className="upload-form">
                    <Form onSubmit="" autoComplete="off">
                        <FormGroup align="center">
                            <Label>ADD INFORMATION ABOUT NEW JOB/POSTINGS</Label>
                        </FormGroup>
                        <hr/>
                        <FormGroup>
                            <Label for="company">Company</Label>
                            <Input 
                                type="text" 
                                name="company" 
                                id="company" 
                                value={company} 
                                placeholder="Enter Company" 
                                onChange={e => setCompany(e.target.value)}/>
                        </FormGroup>    
                        <FormGroup>
                            <Label for="jobprofile">Job Profile</Label>
                            <Input 
                                type="text" 
                                name="jobprofile" 
                                id="jobprofile" 
                                value={jobprofile} 
                                placeholder="Enter Job Profile" 
                                onChange={e => setJobProfile(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="package">Package</Label>
                            <Input 
                                type="text" 
                                name="packages" 
                                id="packages" 
                                value={packages} 
                                placeholder="Enter Package of company" 
                                onChange={e => setPackages(e.target.value)}/>
                        </FormGroup>
                        <FormGroup align="center">
                            <Button>UPLOAD</Button>
                        </FormGroup>
                    </Form>
                </CardBody>    
            </Card>         
        </div>
    );
}

export default AddNewJob;