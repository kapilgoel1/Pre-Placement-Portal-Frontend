import React, { useState } from 'react';
import { Modal, Label, Input, Button } from 'reactstrap';
import './AddNewJobModal.css';

const AddNewJob = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [company, setCompany] = useState(""); 
    const [jobprofile, setJobProfile] = useState("");
    const [packages, setPackages] = useState("");

    const toggle = () => setModal(!modal);

    return (
        <div>
            <button className="functionButtons" onClick={toggle}>{buttonLabel}</button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <div className="content">
                    <div align="center">ADD INFORMATION ABOUT NEW JOB POSTING</div>
                    <hr/>
                    <Label for="company">Company</Label>
                    <Input type="text" name="company" id="company" value={company} placeholder="Enter Company" onChange={e => setCompany(e.target.value)}/>
                    <br/>
                    <Label for="jobprofile">Job Profile</Label>
                    <Input type="text" name="jobprofile" id="jobprofile" value={jobprofile} placeholder="Enter Job Profile" onChange={e => setJobProfile(e.target.value)}/>
                    <br/>
                    <Label for="package">Package</Label>
                    <Input type="text" name="packages" id="packages" value={packages} placeholder="Enter Package of company" onChange={e => setPackages(e.target.value)}/>
                    <br/>
                    <center><Button>UPLOAD</Button> </center>
                </div>
            </Modal>
        </div>
    );
}

export default AddNewJob;