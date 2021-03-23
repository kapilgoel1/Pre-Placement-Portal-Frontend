import React, { useEffect, useState } from "react";
import FormResult from "../FormResult/FormResult";
import FormStep1 from "../FormStep1/FormStep1";
import FormStep2 from "../FormStep2/FormStep2";
import FormStep3 from "../FormStep3/FormStep3";
import FormStep4 from "../FormStep4/FormStep4";
import FormStep5 from "../FormStep5/FormStep5";
import FormStep6 from "../FormStep6/FormStep6";
import "./resumeform.scss";

function ResumeForm() {
  const [step, setStep] = useState(1);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    dob: "",
    languagesKnown: "",
    hobbies: "",
    careerObjective: "",
  });
  const [skills, setSkills] = useState([""]);
  const [achievements, setAchievements] = useState([""]);
  const [education, setEducation] = useState([
    {
      fromYear: "",
      toYear: "",
      qualification: "",
      institute: "",
    },
  ]);
  const [workExperience, setWorkExperience] = useState([]);
  const [projects, setProjects] = useState([
    {
      title: "",
      technologiesUsed: "",
      description: "",
    },
  ]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/resume/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.name) {
          setPersonalDetails({
            name: result.name,
            address: result.address,
            phone: result.phone,
            email: result.email,
            dob: result.dob,
            languagesKnown: result.languagesKnown,
            hobbies: result.hobbies,
            careerObjective: result.careerObjective,
          });
          setSkills(result.skills);
          setAchievements(result.achievements);
          setEducation(result.education);
          setWorkExperience(result.workExperience);
          setProjects(result.projects);
        }
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  if (!loading) {
    switch (step) {
      case 1:
        return (
          <FormStep1
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <FormStep2
            skills={skills.map((skill) => {
              return { skill: skill };
            })}
            setSkills={setSkills}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <FormStep3
            achievements={achievements.map((achievement) => {
              return { achievement: achievement };
            })}
            setAchievements={setAchievements}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <FormStep4
            education={education}
            setEducation={setEducation}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        );
      case 5:
        return (
          <FormStep5
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        );
      case 6:
        return (
          <FormStep6
            projects={projects}
            setProjects={setProjects}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        );
      case 7:
        return (
          <FormResult
            resume={{
              ...personalDetails,
              skills: skills,
              achievements: achievements,
              education: education,
              workExperience: workExperience,
              projects: projects,
            }}
            setStep={setStep}
          />
        );
      default:
        return <FormStep1 personalDetails={personalDetails} />;
    }
  } else return null;
}

export default ResumeForm;
