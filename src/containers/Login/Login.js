import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";
import swal from "sweetalert";
import avatar from "../../assets/avatardefault_92824.png";
import AuthContext from "../../AuthContext";
import CourseContext from "../../CourseContext";

import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [loginCourse, setLoginCourse] = useState("");
  const { setCourse } = useContext(CourseContext);

  // const [setUserType] = useState("");
  const { setuser } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/course/retrieve`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setCourseList(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();

    const AuthData = {
      email: email,
      password: password,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
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
          setCourse(loginCourse);
          setuser({ role: result.role, loggedin: true });
        } else {
          swal(
            "Invalid Login credentials!",
            "Please provide correct email and password",
            "error"
          );
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
        <FormGroup className="pb-2 mt-4 mb-1">
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
        <FormGroup>
          <Label>Choose Course</Label>
          <Input
            type="select"
            value={loginCourse}
            onChange={(e) => {
              setLoginCourse(e.target.value);
            }}
            required
          >
            <option value="">--Please select your course--</option>
            {courseList.map((course) => (
              <option value={course._id} key={course._id}>
                {course.title}
              </option>
            ))}
          </Input>
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
      </Form>
    </div>
  );
};

export default withRouter(Login);
