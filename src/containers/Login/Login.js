import React, { useState, useContext } from "react";
import AuthContext from "../../AuthContext";
import "./Login.scss";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setuser } = useContext(AuthContext);

  // const validateForm = () => {
  //   return email.length > 0 && password.length > 0;
  // }

  const onClickHandler = (e) => {
    e.preventDefault();

    const AuthData = {
      email: email,
      password: password,
    };

    fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(AuthData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.role) {
          setuser({ role: result.role, loggedin: true });
        } else {
          swal("Invalid Login credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-form">
      <Form className="form-body" autoComplete="off" onSubmit={onClickHandler}>
        <h1 className="text-center pb-2 mb-2"> Sign In </h1>
        <FormGroup className="pt-2 my-2">
          <Label size="lg" for="Email">
            Email{" "}
          </Label>
          <Input
            size="lg"
            type="email"
            name="email"
            id="Email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="pb-2 my-2">
          <Label size="lg" for="Password">
            Password{" "}
          </Label>
          <Input
            size="lg"
            type="password"
            name="password"
            id="Password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        <Button
          block
          color="color4"
          type="submit"
          size="lg"
          className="pt-2 mt-4"
        >
          Sign In
        </Button>

        {/*<div className= "text-right">
            <a href="/sign-up"> Forgot the password? </a>
          </div>*/}
      </Form>
    </div>
  );
};

export default withRouter(Login);
