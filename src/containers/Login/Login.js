import React, {useState, useContext} from 'react';
import AuthContext from '../../AuthContext'
import "./Login.css";
import swal from 'sweetalert';
import {withRouter} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Card,  CardBody } from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setloggedin} = useContext(AuthContext);

  // const validateForm = () => {
  //   return email.length > 0 && password.length > 0;
  // }

  const onClickHandler = (e) => {
    e.preventDefault();

    const AuthData = {
      email: email, 
      password: password
    }

    fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify( AuthData ),
    })
      .then(response => response.json())
      .then((result) => {
        if(result.role) {
          setloggedin(true);
        }
        else {
          swal('Invalid Login credentials');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

    return(
      
      <Card className="login-container__form">
      <CardBody className="form-body">
        <Form className="" autoComplete="off" onSubmit={onClickHandler}>
          <h2 className="text-center"> <b> Login </b></h2>
          <FormGroup >
            <Label for="Email">Email </Label>
            <Input type="email" name="email" id="Email" value={email} placeholder="Enter Email" onChange={e => setEmail(e.target.value)} required/>
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password </Label>
            <Input type="password" name="password" id="Password" value={password} placeholder="Enter Password" onChange={e => setPassword(e.target.value)} required/>
          </FormGroup>   
          <center>
          <Button 
            color="secondary"  
            type="submit"
          > 
            Submit 
          </Button>
          </center>
           
          {/*<div className= "text-right">
            <a href="/sign-up"> Forgot the password? </a>
          </div>*/}
        </Form>
        </CardBody>
        </Card>
      
    );
}

export default withRouter(Login);