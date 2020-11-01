import React, { useState } from 'react';
import { Modal, Label, Input, Button } from 'reactstrap';
import './AddNewTestModal.css';

const AddNewTest = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(""); 
    const [testDetail, setTestDetail] = useState("");
    const [testLink, setTestLink] = useState("");

    const toggle = () => setModal(!modal);

    return (
        <div>
            <button className="functionButtons" onClick={toggle}>{buttonLabel}</button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <div className="content">
                    <div align="center">ADD TEST DETAILS HERE</div>
                    <hr/>
                    <Label for="title">TITLE</Label>
                    <Input type="text" name="title" id="title" value={title} placeholder="Enter Title" onChange={e => setTitle(e.target.value)}/>
                    <br/>
                    <Label for="test">TEST DETAILS</Label>
                    <br/>
                    <Input type="text" name="testDetail" id="testDetail" value={testDetail} placeholder="Enter Test Detail" onChange={e => setTestDetail(e.target.value)}/>
                    <center><Label for="or" align="center">OR</Label></center>
                    <Input type="url" name="testLink" id="testLink" value={testLink} placeholder="Paste Test link" onChange={e => setTestLink(e.target.value)}/>
                    <br/>
                    <center><Button>UPLOAD</Button> </center>
                </div>
            </Modal>
        </div>
    );
}

export default AddNewTest;