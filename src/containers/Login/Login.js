import React, { useState, useContext } from "react";
import AuthContext from "../../AuthContext";
import "./Login.scss";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/avatardefault_92824.png";

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
      <div className="outer mb-3">
        <img src={avatar} alt="" className="login-avatar" />
      </div>
      <h1 className="text-center pb-2 mb-2"> WELCOME</h1>
      <Form className="form-body" autoComplete="off" onSubmit={onClickHandler}>
        <FormGroup className="pt-2 my-4">
          {
            // <Label size="lg" for="Email">
            //   Email{' '}
            // </Label>
          }
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faUser} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              size="lg"
              type="email"
              name="email"
              id="Email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
        </FormGroup>
        <FormGroup className="pb-2 my-4">
          {
            // <Label size="lg" for="Password">
            //   Password{' '}
            // </Label>
          }
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faLock} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              size="lg"
              type="password"
              name="password"
              id="Password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
        </FormGroup>

        <Button
          block
          color="color4"
          type="submit"
          size="lg"
          className="pt-2 mt-4"
        >
          LOGIN
        </Button>

        {/*<div className= "text-right">
            <a href="/sign-up"> Forgot the password? </a>
          </div>*/}
      </Form>
    </div>
  );
};

export default withRouter(Login);
