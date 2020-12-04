import React, { useState } from "react";
import "./AddJob.scss";
import { Label, Input, Button, FormGroup, Form } from "reactstrap";

import swal from "sweetalert";
import DCard from "../../DCard/DCard";

const AddJob = (props) => {
  const [company, setCompany] = useState("");
  const [jobprofile, setJobProfile] = useState("");
  const [packages, setPackages] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();

    const alteredData = {
      company: company,
      jobprofile: jobprofile,
      package: packages,
    };

    fetch("http://localhost:4000/jobposting/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(alteredData),
    })
      .then((response) => response.json())
      .then((result) => {
        setCompany("");
        setJobProfile("");
        setPackages("");
        swal("JOB DETAILS UPLOADED");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DCard width="700px">
      <Form onSubmit={onClickHandler} autoComplete="off">
        <FormGroup align="center">
          <Label>ADD INFORMATION ABOUT NEW JOB/POSTINGS</Label>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label for="company">Company</Label>
          <Input
            type="text"
            name="company"
            id="company"
            value={company}
            placeholder="Enter Company"
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="jobprofile">Job Profile</Label>
          <Input
            type="textarea"
            className="jobprofile"
            rows="9"
            name="jobprofile"
            id="jobprofile"
            value={jobprofile}
            placeholder="Enter Job Profile"
            onChange={(e) => setJobProfile(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="package">Package</Label>
          <Input
            type="text"
            name="packages"
            id="packages"
            value={packages}
            placeholder="Enter Package of company"
            onChange={(e) => setPackages(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup align="center">
          <Button type="submit" color="color2">
            UPLOAD
          </Button>
        </FormGroup>
      </Form>
    </DCard>
  );
};

export default AddJob;
