import React, { useEffect, useState } from "react";
import "./ResumeDetails.scss";
import { Input, Label, Button, Form, FormGroup } from "reactstrap";
import DCard from "../DCard/DCard";
import swal from "sweetalert";
import { v4 as uuidv4 } from "uuid";

const ResumeDetails = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [careerobjective, setCareerobjective] = useState("");
  const [skills, setSkills] = useState("");
  const [achievements, setAchievements] = useState("");

  const [dob, setdob] = useState("");
  const [languages, setLanguages] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [inputProjects, setInputProjects] = useState([
    {
      id: uuidv4(),
      protitle: "",
      prodesc: "",
      techused: "",
    },
  ]);

  const [inputEducations, setInputEducations] = useState([
    {
      id: uuidv4(),
      fromyear: "",
      toyear: "",
      qualification: "",
      institute: "",
    },
  ]);

  const [inputWorkExps, setInputWorkExps] = useState([
    {
      id: uuidv4(),
      company: "",
      role: "",
      city: "",
      state: "",
      workfromyear: "",
      worktoyear: "",
      responsibilities: "",
    },
  ]);

  const handleChangeProject = (id, event) => {
    const newInputProjects = inputProjects.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputProjects(newInputProjects);
  };

  const handleChangeEducation = (id, event) => {
    const newInputEducations = inputEducations.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputEducations(newInputEducations);
  };

  const handleChangeWorkExp = (id, event) => {
    const newInputWorkExp = inputWorkExps.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputWorkExps(newInputWorkExp);
  };

  const handleAddProjects = () => {
    setInputProjects([
      ...inputProjects,
      {
        id: uuidv4(),
        protitle: "",
        prodesc: "",
        techused: "",
      },
    ]);
  };

  const handleRemoveProjects = (id) => {
    const values = [...inputProjects];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputProjects(values);
  };

  const handleAddEducation = () => {
    setInputEducations([
      ...inputEducations,
      {
        id: uuidv4(),
        fromyear: "",
        toyear: "",
        qualification: "",
        institute: "",
      },
    ]);
  };

  const handleRemoveEducations = (id) => {
    const values = [...inputEducations];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputEducations(values);
  };

  const handleAddWorkExp = () => {
    setInputWorkExps([
      ...inputWorkExps,
      {
        id: uuidv4(),
        company: "",
        role: "",
        city: "",
        state: "",
        workfromyear: "",
        worktoyear: "",
        responsibilities: "",
      },
    ]);
  };

  const handleRemoveWorkExps = (id) => {
    const values = [...inputWorkExps];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputWorkExps(values);
  };

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

          <Button color="color2" onClick={handleAddProjects}>
            Add more projects
          </Button>
          <Button color="color2" onClick={handleRemoveProjects}>
            Remove recent project
          </Button>
        </FormGroup>
        <hr />
        {inputProjects.map((inputProject) => (
          <FormGroup controlId={inputProject.id}>
            <FormGroup align="center">
              <Label for="projects">PROJECT </Label>
            </FormGroup>
            <FormGroup>
              <Label for="protitle">Project Title </Label>
              <Input
                type="text"
                name="protitle"
                value={inputProject.protitle}
                placeholder=""
                onChange={(e) => handleChangeProject(inputProject.id, e)}
              />
              <Label for="prodesc">Project Description </Label>
              <Input
                type="textarea"
                name="prodesc"
                className="student-resume"
                value={inputProject.prodesc}
                placeholder=""
                onChange={(e) => handleChangeProject(inputProject.id, e)}
              />
              <Label for="techused">Technology used </Label>
              <Input
                type="text"
                name="techused"
                value={inputProject.techused}
                placeholder=""
                onChange={(e) => handleChangeProject(inputProject.id, e)}
              />
            </FormGroup>
          </FormGroup>
        ))}

        <FormGroup align="center">
          <Label for="education">ACADEMIC DETAILS </Label>
          <Button color="color2" onClick={handleAddEducation}>
            Add more qualifications
          </Button>
          <Button color="color2" onClick={handleRemoveEducations}>
            Remove recent qualification
          </Button>
        </FormGroup>
        <hr />
        {inputEducations.map((inputEducation) => (
          <FormGroup controlId={inputEducation.id}>
            <FormGroup align="center">
              <Label for="education">ACADEMICS </Label>
            </FormGroup>
            <Label for="fromyear">From year </Label>
            <Input
              type="text"
              name="fromyear"
              value={inputEducation.fromyear}
              placeholder=""
              onChange={(e) => handleChangeEducation(inputEducation.id, e)}
            />
            <Label for="toyear">To year </Label>
            <Input
              type="text"
              name="toyear"
              value={inputEducation.toyear}
              placeholder=""
              onChange={(e) => handleChangeEducation(inputEducation.id, e)}
            />
            <Label for="qualification">Qualification </Label>
            <Input
              type="text"
              name="qualification"
              value={inputEducation.qualification}
              placeholder=""
              onChange={(e) => handleChangeEducation(inputEducation.id, e)}
            />
            <Label for="institute">Institute </Label>
            <Input
              type="text"
              name="institute"
              value={inputEducation.institute}
              placeholder=""
              onChange={(e) => handleChangeEducation(inputEducation.id, e)}
            />
          </FormGroup>
        ))}

        <FormGroup align="center">
          <Label for="workexp">WORK EXPERIENCE/S</Label>
          <Button color="color2" onClick={handleAddWorkExp}>
            Add more work experience
          </Button>
          <Button color="color2" onClick={handleRemoveWorkExps}>
            Remove recent work experience
          </Button>
          <hr />
          {inputWorkExps.map((inputWorkExp) => (
            <FormGroup controlId={inputWorkExp.id}>
              <FormGroup align="center">
                <Label for="workexp">WORK EXPERIENCE </Label>
              </FormGroup>
              <Label for="company">Company </Label>
              <Input
                type="text"
                name="company"
                value={inputWorkExp.company}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(inputWorkExp.id, e)}
              />
              <Label for="role">Role</Label>
              <Input
                type="text"
                name="role"
                value={inputWorkExp.role}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(inputWorkExp.id, e)}
              />
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                value={inputWorkExp.city}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(inputWorkExp.id, e)}
              />
              <Label for="state">State</Label>
              <Input
                type="text"
                name="state"
                value={inputWorkExp.state}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(inputWorkExp.id, e)}
              />
              <Label for="workfromyear"> From year</Label>
              <Input
                type="text"
                name="workfromyear"
                value={inputWorkExp.workfromyear}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(inputWorkExp.id, e)}
              />
              <Label for="worktoyear"> To year</Label>
              <Input
                type="text"
                name="worktoyear"
                value={inputWorkExp.worktoyear}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(inputWorkExp.id, e)}
              />
              <Label for="responsibilities"> Responsibilities</Label>
              <Input
                type="textarea"
                name="responsibilities"
                value={inputWorkExp.responsibilities}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(inputWorkExp.id, e)}
              />
            </FormGroup>
          ))}
          <FormGroup align="center">
            <Button color="color2" type="submit">
              Done
            </Button>
          </FormGroup>
        </FormGroup>
      </Form>
    </DCard>
  );
};

export default ResumeDetails;
