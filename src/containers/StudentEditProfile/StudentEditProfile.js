import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import './StudentEditProfile.css';
import { Label, Button, Row, Col, Input } from 'reactstrap';
import IMAGE from '../../assets/Image6.jpg';

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

  const history = useHistory();

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

  const onUpdateHandler = () => {
    
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

    if (password !== '') 
    {
      alteredData.password = password;
    }

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
        history.push('/studentdashboard');
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCancelHandler = () => {
    history.push('/studentdashboard');
  }

  return (
    <div className="jcontainer">
      <Row>
        <Col lg={6}>
          <div className="picdiv">
            <img src={IMAGE} alt={IMAGE} className="pic"/>
          </div>
        </Col>
        <Col lg={5}>
          <h1>Edit Profile</h1>
          <Label for="firstName">First Name </Label>
          <Input
            type="text"
            name="firstName"
            value={firstName}
            placeholder=""
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Label for="lastName">Last Name </Label>
          <Input
            type="text"
            name="lastName"
            value={lastName}
            placeholder=""
            onChange={(e) => setLastName(e.target.value)}
          />
          <Label for="course">Course </Label>
          <Input
            type="text"
            name="course"
            value={course}
            placeholder=""
            onChange={(e) => setCourse(e.target.value)}
          />
          <Label for="semester">Semester </Label>
          <Input
            type="text"
            name="semester"
            value={semester}
            placeholder=""
            onChange={(e) => setSemester(e.target.value)}
          />
          <Label for="phone">Mobile No. </Label>
          <Input
            type="text"
            name="phone"
            value={phone}
            placeholder=""
            onChange={(e) => setPhone(e.target.value)}
          />
          <Label for="dob">DOB </Label>
          <Input
            type="date"
            name="dob"
            value={dob}
            placeholder=""
            onChange={(e) => setdob(e.target.value)}
          />
          <Label for="address">Address </Label>
          <Input
            type="textarea"
            name="address"
            value={address}
            placeholder=""
            onChange={(e) => setAddress(e.target.value)}
          />
          <Label for="mothername">Mother's Name </Label>
          <Input
            type="text"
            name="mothername"
            value={motherName}
            placeholder=""
            onChange={(e) => setMotherName(e.target.value)}
          />
          <Label for="fathername">Father's Name </Label>
          <Input
            type="text"
            name="fathername"
            value={fatherName}
            placeholder=""
            onChange={(e) => setFatherName(e.target.value)}
          />
          <Label for="newpassword">New Password</Label>
          <Input
            type="password"
            name="newpassword"
            value={password}
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button1">
          <Row>
            <Col sm={4}>
              <Button color="success" onClick={onUpdateHandler}>
                Update Profile
              </Button>
            </Col>
            <Col sm={4}>
              <Button color="danger" onClick={onCancelHandler}>
                Cancel
              </Button>
            </Col>
          </Row>  
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </div>
  );
};

export default StudentEditProfile;