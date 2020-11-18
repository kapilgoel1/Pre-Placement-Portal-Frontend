import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import './FacultyEditProfile.css';
import { Input, Label, Button, Row, Col } from 'reactstrap';
import IMAGE from '../../assets/Image6.jpg';

const FacultyEditProfile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState(""); 
  const [dob, setdob] = useState(""); 
  
  const history = useHistory()

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
        setPhone(result.phone)
        setAddress(result.address)
        setdob(result.dob)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const onUpdateHandler = () => {
    const alteredData = {
      firstname: firstName,
      lastname: lastName, 
      phone: phone,
      address: address,
      dob: dob
    };
      
  fetch('http://localhost:4000/user/updateprofile/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify( alteredData ),
  })
    .then(response => response.json())
    .then((result) => {
      history.push('/facultydashboard');
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const onCancelHandler = () => {
    history.push('/facultydashboard');
  }

    return (
      <div className="scontainer">
        <Row>
          <Col lg={6}>
            <div className="divpic">
              <img src={IMAGE} alt={IMAGE} className="pic2"/>
          </div>
          </Col>
          <Col lg={5}>
            <div className="divv">
            <h1>Edit Profile</h1>
            <Label for="firstName">First Name </Label> 
            <Input 
              type="text" 
              name="firstName" 
              value={firstName} 
              placeholder="" 
              onChange={e => setFirstName(e.target.value)}
            /> 
            <Label for="lastName">Last Name </Label> 
            <Input 
              type="text" 
              name="lastName"
              value={lastName} 
              placeholder="" 
              onChange={e => setLastName(e.target.value)}
            />
            <Label for="phone">Mobile Number </Label>
            <Input 
              type="text" 
              name="phone" 
              value={phone} 
              placeholder="" 
              onChange={e => setPhone(e.target.value)}
            />
            <Label for="address">Address </Label>
            <Input 
              type="textarea" 
              className="address"
              name="address" 
              value={address} 
              placeholder="" 
              onChange={e => setAddress(e.target.value)}
            />
            <Label for="dob">Date of Birth </Label> 
            <Input 
              type="date" 
              name="dob" 
              value={dob} 
              placeholder="" 
              onChange={e => setdob(e.target.value)}
            />
            <div className="button2">
              <Row>
                <Col lg={4}>
                  <Button color="success" onClick={onUpdateHandler}>
                    Update Profile
                  </Button>
                </Col>
                <Col lg={4}>
                  <Button color="danger" onClick={onCancelHandler}>
                    Cancel
                  </Button>
                </Col>
              </Row>  
            </div>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
        </div>
    );
}

export default FacultyEditProfile;