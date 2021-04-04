import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import swal from "sweetalert";

const SubmitAssignment = ({ modal, toggle, modalid }) => {
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const uploadFile = (e) => {
    e.preventDefault();
    if (
      document.querySelector("#file-field").files[0] &&
      document.querySelector("#file-field").files[0].size > 20971520
    ) {
      swal("Not Allowed", "Select a file with a max size of 20 MB", "error");
      return;
    }
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

    let url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}/file/submitassignment/${modalid}`
    );

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
        swal("Assignment Uploaded!", "", "success");
        setSubmitDisabled(false);
      })
      .catch((err) => {
        console.log(err);
        setSubmitDisabled(false);
      });
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Form onSubmit={uploadFile} autoComplete="off">
        <ModalHeader toggle={toggle}>Submit solution file</ModalHeader>
        <ModalBody>
          <Input name="file" id="file-field" type="file" required />
          {submitDisabled && <h6>Uploading... Dont close the window!</h6>}
        </ModalBody>
        <ModalFooter>
          {submitDisabled ? (
            <Button type="submit" color="color2" disabled>
              Submit
            </Button>
          ) : (
            <Button type="submit" color="color2">
              Submit
            </Button>
          )}
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default SubmitAssignment;
