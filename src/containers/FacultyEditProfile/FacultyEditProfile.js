import React, {useState} from 'react';
import './FacultyEditProfile.css';
import { Form, Label, Button } from 'reactstrap';

const FacultyEditProfile = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState(""); 
    const [dob, setdob] = useState(""); 

    // const validateForm = () => {
    //     return (firstName.length >0 && 
    //             lastName.length > 0 && 
    //             newPassword.length > 0 && 
    //             newPassword===confirm
    //     ); 
    // }

    const onClickHandler = () => {
        const alteredData = {
            firstname: firstName,
            lastname: lastName, 
            phone: phone,
            address: address,
            dob: dob
          }
      
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
              props.history.push('/facultydashboard');
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
    }

    return (
        <div>
            <Form className="faculty-edit-profile" autoComplete="off">
                
                <Label for="firstName">First Name </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="firstName" id="firstName" value={firstName} placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)}/> 
                &nbsp;&nbsp;&nbsp;             
                <Label for="lastName">Last Name </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="lastName" id="lastName" value={lastName} placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)}/>
                <br/><br/> 
                <Label for="phone">Mobile Number </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="phone" id="phone" value={phone} placeholder="Enter your Contact number" onChange={e => setPhone(e.target.value)}/>
                <br/><br/>
                <Label for="address">Address </Label> &nbsp;&nbsp;&nbsp;
                <input type="textarea" name="address" id="address" value={address} placeholder="Enter Address" onChange={e => setAddress(e.target.value)}/>
                <br/><br/>
                <Label for="dob">Date of Birth </Label> &nbsp;&nbsp;&nbsp;
                <input type="date" name="dob" id="dob" value={dob} placeholder="Enter your date of birth" onChange={e => setdob(e.target.value)}/>
                <br/><br/>
                    
                <Button onClick={onClickHandler}>DONE EDITING</Button>
            </Form>
        </div>
    );
}

export default FacultyEditProfile;