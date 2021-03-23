import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import swal from "sweetalert";
import DCard from "../DCard/DCard";
import "./StudentEditProfile.scss";

const StudentEditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setdob] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
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
        setCourse(result.course);
        setSemester(result.semester);
        setPhone(result.phone);
        setdob(result.dob);
        setAddress(result.address);
        setMotherName(result.mothersname);
        setFatherName(result.fathersname);
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
      course: course,
      semester: semester,
      phone: phone,
      address: address,
      dob: dob,
      mothersname: motherName,
      fathersname: fatherName,
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
        swal("Profile Updated!");
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
          <Label for="course">Course </Label>
          <Input
            type="text"
            name="course"
            value={course}
            placeholder=""
            onChange={(e) => setCourse(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="semester">Semester </Label>
          <Input
            type="text"
            name="semester"
            value={semester}
            placeholder=""
            onChange={(e) => setSemester(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Mobile No. </Label>
          <Input
            type="text"
            name="phone"
            value={phone}
            placeholder=""
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dob">DOB </Label>
          <Input
            type="date"
            name="dob"
            value={dob}
            placeholder=""
            onChange={(e) => setdob(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address </Label>
          <Input
            type="textarea"
            name="address"
            className="student-address"
            value={address}
            placeholder=""
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mothername">Mother's Name </Label>
          <Input
            type="text"
            name="mothername"
            value={motherName}
            placeholder=""
            onChange={(e) => setMotherName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="fathername">Father's Name </Label>
          <Input
            type="text"
            name="fathername"
            value={fatherName}
            placeholder=""
            onChange={(e) => setFatherName(e.target.value)}
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

export default StudentEditProfile;
