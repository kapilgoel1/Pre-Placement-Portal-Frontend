import React, { useState, useEffect } from "react";
import "./StudentDetail.scss";
import { Form, Card, CardBody, Label, FormGroup } from "reactstrap";
import { useParams } from "react-router-dom";

const StudentDetail = () => {
  let { id } = useParams();
  const [studentProfile, setStudentProfile] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/manageusers/details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setStudentProfile(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="job-container">
      <div className="job-card mx-1">
        <FormGroup align="center">
          <h3 className="text-white">{`PROFILE OF ${studentProfile.firstname} ${studentProfile.lastname}`}</h3>
        </FormGroup>
        <Card className="mb-3 ">
          <CardBody>
            <FormGroup>
              <h6>FIRST NAME:</h6>
              <p className="text-muted jobprofile">
                {studentProfile.firstname}
              </p>
            </FormGroup>
            <FormGroup>
              <h6>LAST NAME:</h6>
              <p className="text-muted">{studentProfile.lastname}</p>
            </FormGroup>
            <FormGroup>
              <h6>PHONE:</h6>
              <p className="text-muted">{studentProfile.phone}</p>
            </FormGroup>
            <FormGroup>
              <h6>COURSE:</h6>
              <p className="text-muted">{studentProfile.course}</p>
            </FormGroup>
            <FormGroup>
              <h6>SEMESTER:</h6>
              <p className="text-muted">{studentProfile.semester}</p>
            </FormGroup>
            <FormGroup>
              <h6>ADDRESS:</h6>
              <p className="text-muted">{studentProfile.address}</p>
            </FormGroup>
            <FormGroup>
              <h6>FATHER'S NAME:</h6>
              <p className="text-muted">{studentProfile.fathersname}</p>
            </FormGroup>
            <FormGroup>
              <h6>MOTHER'S NAME:</h6>
              <p className="text-muted">{studentProfile.mothersname}</p>
            </FormGroup>
            <FormGroup>
              <h6>DATE OF BIRTH:</h6>
              <p className="text-muted">{studentProfile.dob}</p>
            </FormGroup>
            <FormGroup>
              <h6>EMAIL:</h6>
              <p className="text-muted">{studentProfile.email}</p>
            </FormGroup>
          </CardBody>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="containerj">
      <Card className="view-student-profile-form">
        <CardBody className="upload-form">
          <Form autoComplete="off">
            <FormGroup align="center">
              PROFILE OF <Label> {studentProfile.firstname} </Label>
            </FormGroup>
            <hr />
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
};

export default StudentDetail;
