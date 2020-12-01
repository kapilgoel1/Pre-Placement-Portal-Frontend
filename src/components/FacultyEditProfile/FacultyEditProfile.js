import React, { useState, useEffect } from "react";
import "./FacultyEditProfile.scss";
import { Input, Label, Button, Form, FormGroup } from "reactstrap";
import DCard from "../DCard/DCard";

const FacultyEditProfile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setdob] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/user/details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setFirstName(result.firstname);
        setLastName(result.lastname);
        setPhone(result.phone);
        setAddress(result.address);
        setdob(result.dob);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onUpdateHandler = () => {
    const alteredData = {
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      address: address,
      dob: dob,
    };

    fetch("http://localhost:4000/user/updateprofile/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(alteredData),
    })
      .then((response) => response.json())
      .then((result) => {
        props.history.push("/facultydashboard");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DCard width="770px">
      <Form onSubmit="" autoComplete="off">
        <FormGroup align="center">
          <Label>EDIT PROFILE</Label>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label for="firstName">First Name </Label>
          <Input
            type="text"
            name="firstName"
            value={firstName}
            placeholder=""
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name </Label>
          <Input
            type="text"
            name="lastName"
            value={lastName}
            placeholder=""
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Mobile Number </Label>
          <Input
            type="text"
            name="phone"
            value={phone}
            placeholder=""
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address </Label>
          <Input
            type="textarea"
            name="address"
            className="faculty-address"
            value={address}
            placeholder=""
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="dob">Date of Birth </Label>
          <Input
            type="date"
            name="dob"
            value={dob}
            placeholder=""
            onChange={(e) => setdob(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup align="center">
          <Button color="success" onClick={onUpdateHandler}>
            Update Profile
          </Button>
        </FormGroup>
      </Form>
    </DCard>
  );
};

export default FacultyEditProfile;
