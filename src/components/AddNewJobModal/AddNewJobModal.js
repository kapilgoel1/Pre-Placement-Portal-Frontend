import React, { useState } from 'react';
import './AddNewJobModal.css';
import { Label, Input, Button, FormGroup, Card, CardBody, Form } from 'reactstrap';

const AddNewJob = (props) => {

    const [company, setCompany] = useState(""); 
    const [jobprofile, setJobProfile] = useState("");
    const [packages, setPackages] = useState("");

    const onClickHandler = () => {
        const alteredData = {
            company: company,
            jobprofile: jobprofile,
            package: packages
        };
          
        fetch('http://localhost:4000/jobposting/add', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify( alteredData ),
        })
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          alert("Job details added");
        })
        .catch((err) => {
          console.log(err);
        });
    };

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
                                type="textarea" 
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
                            <Button onClick={onClickHandler}>UPLOAD</Button>
                        </FormGroup>
                    </Form>
                </CardBody>    
            </Card>         
        </div>
    );
}

export default AddNewJob;