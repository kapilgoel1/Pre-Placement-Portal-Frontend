import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, FormGroup, Input, Label } from "reactstrap";
import AuthContext from "../../../AuthContext";
import CourseContext from "../../../CourseContext";
import formatDate from "../../../utils";
import SubmitAssignment from "../SubmitAssignment/SubmitAssignment";
import "./ViewAssignments.scss";

const ViewAssignments = () => {
  const { user } = useContext(AuthContext);
  const { course } = useContext(CourseContext);

  const [searchField, setsearchField] = useState("");
  const [subject, setsubject] = useState("");
  const [fileList, setfileList] = useState([]);
  const [subjectList, setsubjectList] = useState([]);
  const [myFilesChecked, setMyFilesChecked] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalid, setModalid] = useState("");
  const toggle = () => setModal(!modal);

  let history = useHistory();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/subject/retrieve?course=${course}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setsubjectList(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [course]);

  useEffect(() => {
    let url = new URL(
      `${process.env.REACT_APP_BACKEND_URL}/file/retrievelist?category=assignment`
    );
    url.searchParams.append("course", course);

    if (myFilesChecked === true) url.searchParams.append("myfiles", "true");
    if (subject !== "") url.searchParams.append("subject", subject);
    if (searchField !== "") url.searchParams.append("filename", searchField);

    fetch(url, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result.filelist) && result.filelist.length) {
          setfileList(result.filelist);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [subject, searchField, myFilesChecked, course]);

  return (
    <>
      <h2 className="text-center mb-4 pb-3 text-white">Assignments</h2>
      <div className="filepage">
        <div className="filepage__filters">
          <div className="filepage__filters__box">
            <h3>Filters</h3>
            <FormGroup>
              <Label>FileName</Label>
              <Input
                type="search"
                placeholder="Search File By Name"
                onChange={(e) => {
                  setsearchField(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Choose Subject</Label>
              <Input
                type="select"
                value={subject}
                onChange={(e) => {
                  setsubject(e.target.value);
                }}
              >
                <option value="">All Subjects</option>
                {subjectList.map((sub) => (
                  <option value={sub._id} key={sub._id}>
                    {sub.title}
                  </option>
                ))}
              </Input>
            </FormGroup>
            {(user.role === "faculty" || user.role === "admin") && (
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    defaultChecked={myFilesChecked}
                    onChange={() => setMyFilesChecked(!myFilesChecked)}
                  />{" "}
                  Files Uploaded by Me
                </Label>
              </FormGroup>
            )}
          </div>
        </div>

        <div className="filepage__assignments">
          {fileList.map((file) => (
            <Card key={file._id} className="mb-3 ">
              <CardBody>
                <div className="assignment">
                  <div>
                    <a
                      href={`${process.env.REACT_APP_BACKEND_URL}/file/download/${file._id}`}
                      download
                    >
                      {file.filename}
                    </a>
                  </div>
                  <div>Subject - {file.subject.title}</div>
                  <div>Date Uploaded - {formatDate(file.createdAt)}</div>
                  <div>Uploaded By - {file.owner.firstname}</div>
                </div>
                {user.role === "student" && (
                  <Button
                    onClick={() => {
                      setModalid(file._id);
                      toggle();
                    }}
                    className="mt-2"
                    color="color2"
                  >
                    Submit Assignment
                  </Button>
                )}

                <div className="job-controls">
                  {(user.role === "faculty" || user.role === "admin") && (
                    <Button
                      onClick={() => {
                        history.push(`/viewsubmittedassignments/${file._id}`);
                      }}
                      className="mt-2"
                      color="color2"
                    >
                      View Submitted Assignments ({file.submittedassignments})
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <SubmitAssignment modal={modal} toggle={toggle} modalid={modalid} />
    </>
  );
};

export default ViewAssignments;
