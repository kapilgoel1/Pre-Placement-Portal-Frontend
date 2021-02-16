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

  const [careerObjective, setCareerobjective] = useState("");
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);

  const [dob, setdob] = useState("");
  const [languagesKnown, setLanguages] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [projects, setInputProjects] = useState([
    {
      id: uuidv4(),
      title: "",
      description: "",
      technologiesUsed: "",
    },
  ]);

  const [education, setInputEducations] = useState([
    {
      id: uuidv4(),
      fromYear: "",
      toYear: "",
      qualification: "",
      institute: "",
    },
  ]);

  const [workExperience, setInputWorkExps] = useState([
    {
      id: uuidv4(),
      company: "",
      role: "",
      city: "",
      state: "",
      fromYear: "",
      toYear: "",
      responsibilities: [],
    },
  ]);

  const handleChangeProject = (id, event) => {
    const newInputProjects = projects.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputProjects(newInputProjects);
  };

  const handleChangeEducation = (id, event) => {
    const newInputEducations = education.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputEducations(newInputEducations);
  };

  const handleChangeWorkExp = (id, event) => {
    const newInputWorkExp = workExperience.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputWorkExps(newInputWorkExp);
  };

  const handleAddProjects = () => {
    setInputProjects([
      ...projects,
      {
        id: uuidv4(),
        title: "",
        description: "",
        technologiesUsed: "",
      },
    ]);
  };

  const handleRemoveProjects = (id) => {
    const values = [...projects];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputProjects(values);
  };

  const handleAddEducation = () => {
    setInputEducations([
      ...education,
      {
        id: uuidv4(),
        fromYear: "",
        toYear: "",
        qualification: "",
        institute: "",
      },
    ]);
  };

  const handleRemoveEducations = (id) => {
    const values = [...education];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputEducations(values);
  };

  const handleAddWorkExp = () => {
    setInputWorkExps([
      ...workExperience,
      {
        id: uuidv4(),
        company: "",
        role: "",
        city: "",
        state: "",
        fromYear: "",
        toYear: "",
        responsibilities: [],
      },
    ]);
  };

  const handleRemoveWorkExps = (id) => {
    const values = [...workExperience];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputWorkExps(values);
  };

  const onUpdateHandler = (e) => {
    e.preventDefault();

    const alteredData = {
      name: name,
      address: address,
      phone: phone,
      email: email,
      careerObjective: careerObjective,
      skills: skills,
      achievements: achievements,

      projects: [title, description, technologiesUsed],
      title: title,
      description: description,
      technologiesUsed: technologiesUsed,

      education: education,
      fromYear: fromyear,
      toYear: toyear,
      qualification: qualification,
      institute: institute,

      dob: dob,
      languagesKnown: languagesKnown,
      hobbies: hobbies,

      workExperience: workexperience,
      company: company,
      role: role,
      city: city,
      state: state,
      fromYear: workfromyear,
      toYear: worktoyear,
      responsibilities: responsibilities,
    };

    fetch("http://localhost:4000/resume/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(alteredData),
    })
      .then((response) => response.json())
      .then((result) => {
        swal("Details filled!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DCard width="850px">
      <Form onSubmit={onUpdateHandler} autoComplete="off">
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
            value={careerObjective}
            placeholder=""
            onChange={(e) => setCareerobjective(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="skills">Skills </Label>
          <Input
            type="text"
            name="skills"
            value={skills}
            placeholder=""
            onChange={(e) => setSkills(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="achievements">Achievements </Label>
          <Input
            type="text"
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
            value={languagesKnown}
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
        {projects.map((project) => (
          <FormGroup controlId={project.id}>
            <FormGroup align="center">
              <Label for="projects">PROJECT </Label>
            </FormGroup>
            <FormGroup>
              <Label for="protitle">Project Title </Label>
              <Input
                type="text"
                name="protitle"
                value={project.title}
                placeholder=""
                onChange={(e) => handleChangeProject(project.id, e)}
              />
              <Label for="prodesc">Project Description </Label>
              <Input
                type="textarea"
                name="prodesc"
                className="student-resume"
                value={project.description}
                placeholder=""
                onChange={(e) => handleChangeProject(project.id, e)}
              />
              <Label for="techused">Technology used </Label>
              <Input
                type="text"
                name="techused"
                value={project.technologiesUsed}
                placeholder=""
                onChange={(e) => handleChangeProject(project.id, e)}
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
        {education.map((education) => (
          <FormGroup controlId={education.id}>
            <FormGroup align="center">
              <Label for="education">ACADEMICS </Label>
            </FormGroup>
            <Label for="fromyear">From year </Label>
            <Input
              type="text"
              name="fromyear"
              value={education.fromYear}
              placeholder=""
              onChange={(e) => handleChangeEducation(education.id, e)}
            />
            <Label for="toyear">To year </Label>
            <Input
              type="text"
              name="toyear"
              value={education.toYear}
              placeholder=""
              onChange={(e) => handleChangeEducation(education.id, e)}
            />
            <Label for="qualification">Qualification </Label>
            <Input
              type="text"
              name="qualification"
              value={education.qualification}
              placeholder=""
              onChange={(e) => handleChangeEducation(education.id, e)}
            />
            <Label for="institute">Institute </Label>
            <Input
              type="text"
              name="institute"
              value={education.institute}
              placeholder=""
              onChange={(e) => handleChangeEducation(education.id, e)}
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
          {workExperience.map((workExperience) => (
            <FormGroup controlId={workExperience.id}>
              <FormGroup align="center">
                <Label for="workexp">WORK EXPERIENCE </Label>
              </FormGroup>
              <Label for="company">Company </Label>
              <Input
                type="text"
                name="company"
                value={workExperience.company}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(workExperience.id, e)}
              />
              <Label for="role">Role</Label>
              <Input
                type="text"
                name="role"
                value={workExperience.role}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(workExperience.id, e)}
              />
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                value={workExperience.city}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(workExperience.id, e)}
              />
              <Label for="state">State</Label>
              <Input
                type="text"
                name="state"
                value={workExperience.state}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(workExperience.id, e)}
              />
              <Label for="workfromyear"> From year</Label>
              <Input
                type="text"
                name="workfromyear"
                value={workExperience.fromYear}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(workExperience.id, e)}
              />
              <Label for="worktoyear"> To year</Label>
              <Input
                type="text"
                name="worktoyear"
                value={workExperience.toYear}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(workExperience.id, e)}
              />
              <Label for="responsibilities"> Responsibilities</Label>
              <Input
                type="text"
                name="responsibilities"
                value={workExperience.responsibilities}
                placeholder=""
                onChange={(e) => handleChangeWorkExp(workExperience.id, e)}
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
