import React, { useEffect, useState } from "react";
import "./ResumeDetails.scss";
import { Input, Label, Button, Form, FormGroup } from "reactstrap";
import DCard from "../DCard/DCard";
import swal from "sweetalert";

const ResumeDetails = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [careerobjective, setCareerobjective] = useState("");
  const [skills, setSkills] = useState("");
  const [achievements, setAchievements] = useState("");

  const [projecttitle, setProjecttitle] = useState("");
  const [projectdescription, setProjectdescription] = useState("");
  const [technologyused, setTechnologyused] = useState("");

  const [fromyear, setFromyear] = useState("");
  const [toyear, setToyear] = useState("");
  const [qualification, setQualification] = useState("");
  const [institute, setInstitute] = useState("");

  const [dob, setdob] = useState("");
  const [languages, setLanguages] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [workfromyear, setWorkfromyear] = useState("");
  const [worktoyear, setWorktoyear] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  //   const onAddHandler = () => {

  function addInput(projectsdone) {
    var counter = 1;
    var limit = 3;
    if (counter === limit) {
      swal("You have reached the limit of adding " + counter + " inputs");
    } else {
      var newdiv = document.createElement("div");
      newdiv.innerHTML = "Project " + (counter + 1) + " ";
      document.getElementById(projectsdone).appendChild(newdiv);
      counter++;
    }
  }

  // const onUpdateHandler = (e) => {
  //     e.preventDefault();

  //     const alteredData = {
  //       name: name,
  //       address: address,
  //       phone: phone,
  //       email: email,
  //       careerobjective: careerobjective,
  //       skills: skills,
  //       achievements: achievements,

  //       projects: projects,
  //       projecttitle: projecttitle,
  //       projectdescription: projectdescription,
  //       technologyused: technologyused,

  //       education: education,
  //       fromyear: fromyear,
  //       toyear: toyear,
  //       qualification: qualification,
  //       institute: institute,

  //       dob: dob,
  //       languages: languages,
  //       hobbies: hobbies,

  //       workexperience: workexperience,
  //       company: company,
  //       role: role,
  //       city: city,
  //       state: state,
  //       workfromyear: workfromyear,
  //       worktoyear: worktoyear,
  //       responsibilities: responsibilities
  //     };

  // fetch("http://localhost:4000/user/updateprofile/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   credentials: "include",
  //   body: JSON.stringify(alteredData),
  // })
  //   .then((response) => response.json())
  //   .then((result) => {
  //     swal("Profile Updated!");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // };

  return (
    <DCard width="850px">
      {/* <Form onSubmit={onUpdateHandler} autoComplete="off"> */}
      <Form>
        <FormGroup align="center">
          <Label>RESUME DETAILS</Label>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label for="name">Full Name </Label>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder=""
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address </Label>
          <Input
            type="textarea"
            name="address"
            className="student-resume"
            value={address}
            placeholder=""
            onChange={(e) => setAddress(e.target.value)}
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
          <Label for="email">Email </Label>
          <Input
            type="email"
            name="email"
            value={email}
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="careerobj">Career Objective </Label>
          <Input
            type="textarea"
            name="careerobj"
            className="student-resume"
            value={careerobjective}
            placeholder=""
            onChange={(e) => setCareerobjective(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="skills">Skills </Label>
          <Input
            type="textarea"
            name="skills"
            value={skills}
            placeholder=""
            onChange={(e) => setSkills(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="achievements">Achievements </Label>
          <Input
            type="textarea"
            name="achievements"
            value={achievements}
            placeholder=""
            onChange={(e) => setAchievements(e.target.value)}
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
          <Label for="languages">Languages known </Label>
          <Input
            type="text"
            name="languages"
            value={languages}
            placeholder=""
            onChange={(e) => setLanguages(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="hobbies">Hobbies </Label>
          <Input
            type="text"
            name="hobbies"
            value={hobbies}
            placeholder=""
            onChange={(e) => setHobbies(e.target.value)}
          />
        </FormGroup>
        <FormGroup align="center">
          <Label for="projects">PROJECTS </Label>
          <Button color="color2" onclick={addInput()}>
            {" "}
            Add more projects
          </Button>
        </FormGroup>
        <hr />
        <FormGroup controlId="projectsdone">
          <FormGroup align="center">
            <Label for="projects">PROJECT 1 </Label>
          </FormGroup>
          <FormGroup>
            <Label for="protitle">Project Title </Label>
            <Input
              type="text"
              name="protitle"
              value={projecttitle}
              placeholder=""
              onChange={(e) => setProjecttitle(e.target.value)}
            />
            <Label for="prodesc">Project Description </Label>
            <Input
              type="text"
              name="prodesc"
              value={projectdescription}
              placeholder=""
              onChange={(e) => setProjectdescription(e.target.value)}
            />
            <Label for="techused">Technology used </Label>
            <Input
              type="text"
              name="techused"
              value={technologyused}
              placeholder=""
              onChange={(e) => setTechnologyused(e.target.value)}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup align="center">
          <Label for="education">ACADEMIC DETAILS </Label>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label for="fromyear">From year </Label>
          <Input
            type="text"
            name="fromyear"
            value={fromyear}
            placeholder=""
            onChange={(e) => setFromyear(e.target.value)}
          />
          <Label for="toyear">To year </Label>
          <Input
            type="text"
            name="toyear"
            value={toyear}
            placeholder=""
            onChange={(e) => setToyear(e.target.value)}
          />
          <Label for="qualification">Qualification </Label>
          <Input
            type="text"
            name="qualification"
            value={qualification}
            placeholder=""
            onChange={(e) => setQualification(e.target.value)}
          />
          <Label for="institute">Institute </Label>
          <Input
            type="text"
            name="institute"
            value={institute}
            placeholder=""
            onChange={(e) => setInstitute(e.target.value)}
          />
        </FormGroup>
        <FormGroup align="center">
          <Label for="workexp">WORK EXPERIENCE</Label>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label for="company">Company </Label>
          <Input
            type="text"
            name="company"
            value={company}
            placeholder=""
            onChange={(e) => setCompany(e.target.value)}
          />
          <Label for="role">Role</Label>
          <Input
            type="text"
            name="role"
            value={role}
            placeholder=""
            onChange={(e) => setRole(e.target.value)}
          />
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            value={city}
            placeholder=""
            onChange={(e) => setCity(e.target.value)}
          />
          <Label for="state">State</Label>
          <Input
            type="text"
            name="state"
            value={state}
            placeholder=""
            onChange={(e) => setState(e.target.value)}
          />
          <Label for="workfromyear"> From year</Label>
          <Input
            type="text"
            name="workfromyear"
            value={workfromyear}
            placeholder=""
            onChange={(e) => setWorkfromyear(e.target.value)}
          />
          <Label for="worktoyear"> To year</Label>
          <Input
            type="text"
            name="worktoyear"
            value={worktoyear}
            placeholder=""
            onChange={(e) => setWorktoyear(e.target.value)}
          />
          <Label for="responsibilities"> Responsibilities</Label>
          <Input
            type="textarea"
            name="responsibilities"
            value={responsibilities}
            placeholder=""
            onChange={(e) => setResponsibilities(e.target.value)}
          />
        </FormGroup>
        <FormGroup align="center">
          <Button color="color2" type="submit">
            Done
          </Button>
        </FormGroup>
      </Form>
    </DCard>
  );
};

export default ResumeDetails;
