import React, { useEffect, useState } from 'react';
import './StudentEditProfile.css';
import { Form, Label, Button, Row, Col, Input } from 'reactstrap';

const StudentEditProfile = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setdob] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/user/details', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((result) => {
        setFirstName(result.firstname)
        setLastName(result.lastname)
        setCourse(result.course)
        setSemester(result.semester)
        setPhone(result.phone)
        setdob(result.dob)
        setAddress(result.address)
        setMotherName(result.mothersname)
        setFatherName(result.fathersname)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])




  const onClickHandler = () => {
    


    const alteredData = {
      firstname: firstName,
      lastname: lastName,
      course: course,
      semester: semester,
      phone: phone,
      address: address,
      dob: dob,
      mothersname: motherName,
      fathersname: fatherName,
    };

    if(password !== '') alteredData.password = password;

    fetch('http://localhost:4000/user/updateprofile/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(alteredData),
    })
      .then((response) => response.json())
      .then((result) => {
        props.history.push('/studentdashboard');
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    //props.history.push('/studentdashboard');
  };

  return (
    <div className="scontainer">
      <div className="containerj">
        <div className="pic"></div>
        <Row className="form-container align-items-center">
          <Col>
            <Form className="student-edit-profile" autoComplete="off">
              <h1>Edit Profile</h1>
              <Row className="align-items-center formline">
                <Col sm="2">
                  <Label for="firstName">First Name </Label>
                </Col>
                <Col sm="4">
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    placeholder=""
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col sm="2">
                  <Label for="lastName">Last Name </Label>
                </Col>
                <Col sm="4">
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    placeholder=""
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="align-items-center formline">
                <Col sm="2">
                  <Label for="course">Course </Label>
                </Col>
                <Col sm="4">
                  <Input
                    type="text"
                    name="course"
                    id="course"
                    value={course}
                    placeholder=""
                    onChange={(e) => setCourse(e.target.value)}
                  />
                </Col>
                <Col sm="2">
                  <Label for="semester">Semester </Label>
                </Col>
                <Col sm="4">
                  <Input
                    type="text"
                    name="semester"
                    id="semester"
                    value={semester}
                    placeholder=""
                    onChange={(e) => setSemester(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="align-items-center formline">
                <Col sm="2">
                  <Label for="phone">Mobile No. </Label>
                </Col>
                <Col sm="4">
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    placeholder=""
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                <Col sm="2">
                  <Label for="dob">DOB </Label>
                </Col>
                <Col sm="4">
                  <Input
                    type="date"
                    name="dob"
                    id="dob"
                    value={dob}
                    placeholder=""
                    onChange={(e) => setdob(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="align-items-center formline">
                <Col sm="2">
                  <Label for="address">Address </Label>
                </Col>
                <Col sm="10">
                  <Input
                    type="textarea"
                    name="address"
                    id="address"
                    value={address}
                    placeholder=""
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="align-items-center formline">
                <Col sm="2">
                  <Label for="mothername">Mother's Name </Label>
                </Col>
                <Col sm="4">
                  <Input
                    type="text"
                    name="mothername"
                    id="mothername"
                    value={motherName}
                    placeholder=""
                    onChange={(e) => setMotherName(e.target.value)}
                  />
                </Col>
                <Col sm="2">
                  <Label for="fathername">Father's Name </Label>
                </Col>
                <Col sm="4">
                  <Input
                    type="text"
                    name="fathername"
                    id="fathername"
                    value={fatherName}
                    placeholder=""
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="align-items-center formline">
                <Col sm="2">
                  <Label for="fathername">New Password</Label>
                </Col>
                <Col sm="4">
                  <Input
                    type="password"
                    name="fathername"
                    id="fathername"
                    value={password}
                    placeholder=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button size="lg" color="info" block onClick={onClickHandler}>
                    Update Profile
                  </Button>
                </Col>
                <Col>
                  <Button size="lg" block onClick={onClickHandler}>
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentEditProfile;
