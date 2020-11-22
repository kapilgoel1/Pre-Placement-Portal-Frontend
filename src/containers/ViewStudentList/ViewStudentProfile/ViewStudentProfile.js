import React, { useState, useEffect } from 'react';
import "./ViewStudentProfile.css";
import { Form, Card, CardBody, Label, FormGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';

const ViewStudentProfile = () => {

    let { id } = useParams();
    const [studentProfile, setStudentProfile] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/manageusers/details/${id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then((result) => {
            setStudentProfile(result);
        })
        .catch((err) => {
          console.log(err);
        });
        
    }, [id])

    return (
        <div className="containerj">
            <Card className="view-student-profile-form">
                <CardBody className="upload-form">
                    <Form autoComplete="off">
                        <FormGroup align="center">
                            PROFILE OF <Label> {studentProfile.firstname} </Label>
                        </FormGroup>
                        <hr/>
                        <FormGroup>
                            FIRST NAME: <Label> {studentProfile.firstname} </Label>
                        </FormGroup>
                        <FormGroup>
                            LAST NAME: <Label> {studentProfile.lastname} </Label>
                        </FormGroup>
                        <FormGroup>
                            PHONE NUMBER: <Label> {studentProfile.phone} </Label>
                        </FormGroup>
                        <FormGroup>
                            COURSE: <Label> {studentProfile.course} </Label>
                        </FormGroup>
                        <FormGroup>
                            SEMESTER: <Label> {studentProfile.semester} </Label>
                        </FormGroup>
                        <FormGroup>
                            ADDRESS: <Label> {studentProfile.address} </Label>
                        </FormGroup>
                        <FormGroup>
                            FATHER'S NAME: <Label> {studentProfile.fathersname} </Label>
                        </FormGroup>
                        <FormGroup>
                            MOTHER'S NAME: <Label> {studentProfile.mothersname} </Label>
                        </FormGroup>
                        <FormGroup>
                            DATE OF BIRTH: <Label> {studentProfile.dob} </Label>
                        </FormGroup>
                        <FormGroup>
                            EMAIL: <Label> {studentProfile.email} </Label>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>        
        </div>
    );
}

export default ViewStudentProfile;