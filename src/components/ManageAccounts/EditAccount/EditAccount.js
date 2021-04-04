import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import swal from "sweetalert";
import DCard from "../../DCard/DCard";

function EditAccount() {
  let { id } = useParams();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/manageusers/details/${id}`, {
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
        setEmail(result.email);
        setRole(result.role);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const onUpdateHandler = (e) => {
    e.preventDefault();

    const alteredData = {
      firstname: firstName,
      lastname: lastName,
      role: role,
      email: email,
    };

    if (password !== "") {
      alteredData.password = password;
    }

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/manageusers/updateprofile/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(alteredData),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        swal("Profile Updated!", "", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DCard width="770px">
      <Form onSubmit={onUpdateHandler} autoComplete="off">
        <FormGroup align="center">
          <Label>EDIT Account</Label>
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

        <Input
          type="select"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </Input>

        <FormGroup>
          <Label>Email </Label>
          <Input
            type="text"
            value={email}
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
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
}

export default EditAccount;
