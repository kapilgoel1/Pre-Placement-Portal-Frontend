import React, { useState } from 'react';
import './AddExternalResForm.css';
import { Label, Input, Button, FormGroup, Form, CardBody, Card } from 'reactstrap';
import swal from 'sweetalert';

const AddNewTest = (props) => {
   
    const [title, setTitle] = useState(""); 
    const [link, setLink] = useState("");

    const onClickHandler = (e) => {
        e.preventDefault();

        const alteredData = {
            title: title,
            link: link
        };
          
        fetch('http://localhost:4000/externalresource/add', {
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
          swal("EXTERNAL RESOURCE UPLOADED");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
        <div className="containerj">
            <Card className="add-ext-res-form">
                <CardBody className="upload-form">
                    <Form onSubmit={onClickHandler} autoComplete="off">
                        <FormGroup align="center">
                            <Label>ADD EXTERNAL RESOURCE/WEBLINKS</Label>
                        </FormGroup>
                        <hr/>
                        <FormGroup>
                            <Label for="title">TITLE</Label>
                            <Input 
                                type="text" 
                                name="title" 
                                id="title" 
                                value={title} 
                                placeholder="Enter Title" 
                                onChange={e => setTitle(e.target.value)}
                                required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="link">LINK</Label>
                            <Input 
                                type="url" 
                                name="link" 
                                id="link" 
                                value={link} 
                                placeholder="Paste link" 
                                onChange={e => setLink(e.target.value)}
                                required />
                        </FormGroup>
                        <FormGroup align="center">
                            <Button type="submit">UPLOAD</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>            
        </div>
    );
}

export default AddNewTest;