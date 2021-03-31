import React, { useEffect, useState, useContext } from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Progress,
} from "reactstrap";
import swal from "sweetalert";
import DCard from "../../DCard/DCard";
import CourseContext from "../../../CourseContext";
import "./AddFile.scss";

const FileUploadTest = () => {
  const [totalData, setTotalData] = useState(0);
  const [loadedData, setLoadedData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectList, setSubjectList] = useState([]);

  const { course } = useContext(CourseContext);

  useEffect(() => {
    fetch(`http://localhost:4000/subject/retrieve?course=${course}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setSubjectList(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [course]);

  const uploadFile = (e) => {
    e.preventDefault();
    for (
      var y = 0;
      y < document.querySelector("#file-field").files.length;
      y++
    ) {
      if (document.querySelector("#file-field").files[y].size > 20971520) {
        swal("Not Allowed", "Select a file with a max size of 20 MB", "error");
        return;
      }
    }
    const formData = new FormData();
    var ins = document.querySelector("#file-field").files.length;
    for (var x = 0; x < ins; x++) {
      formData.append(
        "multerkey",
        document.querySelector("#file-field").files[x],
        document.querySelector("#file-field").files[x].name
      );
    }

    // const files = document.querySelector('').files;
    // formData.append('multerkey', files);

    var xhrObj = new XMLHttpRequest();

    xhrObj.upload.onloadstart = () => {
      setTotalData(0);
      setLoadedData(0);
      setLoading(true);
    };

    xhrObj.upload.onprogress = (evt) => {
      if (evt.lengthComputable) {
        setTotalData(evt.total);
        setLoadedData(evt.loaded);
      }
    };

    xhrObj.onload = () => {
      setLoading(false);
      setCategory("");
      setSubject("");
      document.querySelector("#file-field").value = "";
      if (xhrObj.status > 300) alert("File Upload Error");
      else setLoaded(true);
    };

    xhrObj.withCredentials = true;
    let url = new URL("http://localhost:4000/file/add");
    url.searchParams.append("category", category);
    url.searchParams.append("course", course);

    if (subject !== "") url.searchParams.append("subject", subject);

    xhrObj.open("POST", url);
    xhrObj.send(formData);
  };

  return (
    <DCard>
      <Form onSubmit={uploadFile} autoComplete="off">
        <FormGroup align="center">
          <Label for="upload">UPLOAD A FILE</Label>

          <hr />
        </FormGroup>
        <FormGroup>
          <Label for="category">
            CATEGORY <span className="text-primary">*</span>
          </Label>
          <Input
            type="select"
            value={category}
            className="select"
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="assignment">Assignment</option>
            <option value="testpaper">Sample Test Paper</option>
            <option value="notes">Notes</option>
            <option value="video">Video Lecture</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>SUBJECT</Label>
          <Input
            type="select"
            value={subject}
            className="select"
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            {subjectList.map((sub) => (
              <option value={sub._id} key={sub._id}>
                {sub.title}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup align="center">
          <Input name="file" id="file-field" type="file" required multiple />
        </FormGroup>
        <FormGroup align="center">
          <Button type="submit" color="color2">
            SUBMIT
          </Button>
        </FormGroup>
      </Form>
      {loading && <Progress animated max={totalData} value={loadedData} />}
      {loaded && !loading && <Alert color="color2">Files Uploaded!</Alert>}
    </DCard>
  );
};

export default FileUploadTest;
