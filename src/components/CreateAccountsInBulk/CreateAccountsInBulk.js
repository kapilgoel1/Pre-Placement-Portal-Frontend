import React from "react";
// import './AddAnnouncement.scss';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import DCard from "../DCard/DCard";

import swal from "sweetalert";

const AddAnnouncement = (props) => {
  const uploadFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "userdata",
      document.querySelector("#file-field").files[0],
      document.querySelector("#file-field").files[0].name
    );

    let url = new URL("http://localhost:4000/manageusers/bulkregister");

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
        document.querySelector("#file-field").value = "";
        if (result.error) swal(result.error);
        else swal("Users Registered");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="text-center text-white">Create Accounts In Bulk</h1>
      <h4 className="text-center text-white">
        Fill in the below excel sheet with the users details and upload it to
        create the accounts
      </h4>
      <div className="text-center">
        <a
          href="http://localhost:4000/manageusers/sampleusersfile"
          className="btn btn-lg btn-color5"
          download
        >
          Download Excel file to be filled
        </a>
      </div>
      <h4 className="text-center text-white"> </h4>
      <DCard width="780px">
        <Form onSubmit={uploadFile} autoComplete="off">
          <FormGroup>
            <Label className="h6">Excel file with users data</Label>
            <Input name="file" id="file-field" type="file" required />
          </FormGroup>

          <FormGroup align="center">
            <Button type="submit" color="color2">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </DCard>
    </>
  );
};

export default AddAnnouncement;
