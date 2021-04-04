import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import swal from "sweetalert";
import DCard from "../DCard/DCard";
import "./FacultyEditProfile.scss";

const FacultyEditProfile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setdob] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/details`, {
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

  const onUpdateHandler = (e) => {
    e.preventDefault();

    const alteredData = {
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      address: address,
      dob: dob,
    };

    if (password !== "") {
      alteredData.password = password;
    }

    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/updateprofile/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(alteredData),
    })
      .then((response) => response.json())
      .then((result) => {
        swal("Profile Updated", "", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DCard width="770px">
      <Form onSubmit={onUpdateHandler} autoComplete="off">
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
          />
        </FormGroup>
        <FormGroup>
          <Label for="newpassword">New Password</Label>
          <Input
            type="password"
            name="newpassword"
            value={password}
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup align="center">
          <Button color="color2" type="submit">
            Update Profile
          </Button>
        </FormGroup>
      </Form>
    </DCard>
  );
};

export default FacultyEditProfile;
