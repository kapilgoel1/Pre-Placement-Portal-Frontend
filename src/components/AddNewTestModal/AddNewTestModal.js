import React, { useState } from 'react';
import { Label, Input, Button } from 'reactstrap';

const AddNewTest = (props) => {
   
    const [title, setTitle] = useState(""); 
    const [testDetail, setTestDetail] = useState("");
    const [testLink, setTestLink] = useState("");

    return (
        <div>
            
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
  
        </div>
    );
}

export default AddNewTest;