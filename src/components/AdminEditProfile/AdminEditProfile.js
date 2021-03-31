import React, { useState, useEffect } from "react";
import { Input, Label, Button, Form, FormGroup } from "reactstrap";
import DCard from "../DCard/DCard";
import swal from "sweetalert";

const AdminEditProfile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

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
    };

    if (password !== "") {
      alteredData.password = password;
    }

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

export default AdminEditProfile;
