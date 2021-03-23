import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import swal from "sweetalert";
import DCard from "../../DCard/DCard";
import "./AddAnnouncement.scss";

const AddAnnouncement = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const uploadFile = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    const formData = new FormData();
    var ins = document.querySelector("#file-field").files.length;
    for (var x = 0; x < ins; x++) {
      formData.append(
        "file",
        document.querySelector("#file-field").files[x],
        document.querySelector("#file-field").files[x].name
      );
    }

    let url = new URL("http://localhost:4000/announcement/upload");
    url.searchParams.append("title", title);
    url.searchParams.append("content", content);

    fetch(url, {
      method: "POST",
      headers: {
        // 'Content-Type': 'application/json',
      },
      credentials: "include",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTitle("");
        setContent("");
        document.querySelector("#file-field").value = "";
        swal("ANNOUNCEMENT UPLOADED");
        setSubmitDisabled(false);
      })
      .catch((err) => {
        console.log(err);
        setSubmitDisabled(false);
      });
  };

  return (
    <DCard width="780px">
      <Form onSubmit={uploadFile} autoComplete="off">
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
        <Input name="file" id="file-field" type="file" />

        <FormGroup align="center">
          {submitDisabled ? (
            <Button type="submit" color="color2" disabled>
              Submit
            </Button>
          ) : (
            <Button type="submit" color="color2">
              Submit
            </Button>
          )}
        </FormGroup>
      </Form>
    </DCard>
  );
};

export default AddAnnouncement;
