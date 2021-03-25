import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import swal from "sweetalert";
import DCard from "../../DCard/DCard";
import CourseContext from "../../../CourseContext";
import "./AddTest.scss";

const AddTest = (props) => {
  const [title, setTitle] = useState("");
  const [testDetail, setTestDetail] = useState("");
  const [testLink, setTestLink] = useState("");

  const { course } = useContext(CourseContext);

  const onClickHandler = (e) => {
    e.preventDefault();

    const alteredData = {
      title: title,
      link: testLink,
      detail: testDetail,
      course,
    };

    fetch("http://localhost:4000/test/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(alteredData),
    })
      .then((response) => response.json())
      .then((result) => {
        setTitle("");
        setTestDetail("");
        setTestLink("");
        swal("TEST UPLOADED");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DCard>
      <Form onSubmit={onClickHandler} autoComplete="off">
        <FormGroup align="center">
          <Label>ADD TEST DETAILS</Label>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label for="title">TITLE</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="or" align="center">
            Test Link
          </Label>
          <Input
            type="url"
            name="testLink"
            id="testLink"
            value={testLink}
            placeholder="Paste Test link"
            onChange={(e) => setTestLink(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="test">TEST DETAILS</Label>
          <Input
            type="text"
            name="testDetail"
            id="testDetail"
            value={testDetail}
            placeholder="Enter Test Detail"
            onChange={(e) => setTestDetail(e.target.value)}
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

export default AddTest;
