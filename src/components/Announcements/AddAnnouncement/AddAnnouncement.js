import React, { useState } from "react";
import "./AddAnnouncement.scss";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import DCard from "../../DCard/DCard";

import swal from "sweetalert";

const AddAnnouncement = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();

    const alteredData = {
      title: title,
      content: content,
    };

    fetch("http://localhost:4000/announcement/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(alteredData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        swal("ANNOUNCEMENT UPLOADED");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DCard width="780px">
      <Form onSubmit={onClickHandler} autoComplete="off">
        <FormGroup align="center">
          <Label>ADD ANNOUNCEMENT</Label>
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Add Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            type="textarea"
            name="content"
            id="content"
            className="content"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup align="center">
          <Button type="submit" color="color2">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </DCard>
  );
};

export default AddAnnouncement;
