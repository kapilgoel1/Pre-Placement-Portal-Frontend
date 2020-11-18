import React, { useState } from 'react';
import "./AddAnnouncement.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FacultyNavBar from "../FacultyNavBar/FacultyNavBar"
import Footer from "../Footer/Footer"

const AddAnnouncement = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [publisher, setPublisher] = useState("");

    const onClickHandler = () => {
        // alert(`title is ${title} and content is ${content}`);
    }

    return (
        <div className="containerj">
            <Card className="add-announcement-form">
                <CardBody className="upload-form">
                    <Form onSubmit="" autoComplete="off">
                        <FormGroup align="center">
                            <Label>ADD ANNOUNCEMENT</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Add Title Here" 
                                value={title} 
                                onChange={e => setTitle(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input 
                                type="textarea" 
                                name="content" 
                                id="content" 
                                value={content} 
                                onChange={e => setContent(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" onClick={onClickHandler}>Submit</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>        
        </div>
    );
}

export default AddAnnouncement;