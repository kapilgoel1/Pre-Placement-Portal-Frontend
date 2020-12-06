import React, { useState, useEffect } from "react";
import "./StudentDetail.scss";
import { Card, CardBody, FormGroup } from "reactstrap";
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
};

export default StudentDetail;
