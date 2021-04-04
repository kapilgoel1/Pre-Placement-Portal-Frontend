import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";
import AuthContext from "../../../AuthContext";
import CourseContext from "../../../CourseContext";
import FileStrip from "../FileStrip/FileStrip";
import "./ViewFiles.scss";

function ViewFiles(props) {
  const [searchField, setsearchField] = useState("");
  const [subject, setsubject] = useState("");
  const [fileList, setfileList] = useState([]);
  const [subjectList, setsubjectList] = useState([]);
  const [pageCount, setpageCount] = useState(5);
  const [offset, setoffset] = useState(0);
  const [myFilesChecked, setMyFilesChecked] = React.useState(false);
  let { category } = useParams();
  const { user } = useContext(AuthContext);
  const { course } = useContext(CourseContext);

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
    let url = new URL(`${process.env.REACT_APP_BACKEND_URL}/file/retrievelist`);
    url.searchParams.append("course", course);
    if (category !== undefined) {
      url.searchParams.append("category", category);
    }
    if (myFilesChecked === true) url.searchParams.append("myfiles", "true");
    url.searchParams.append("limit", props.limit);
    url.searchParams.append("skip", offset);
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
        } else {
          let offsetcal = result.numOfFiles - props.limit;
          if (offsetcal < 0) offsetcal = 0;
          setoffset(offsetcal);
          setfileList(result.filelist);
        }

        setpageCount(Math.ceil(result.numOfFiles / props.limit));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    offset,
    subject,
    searchField,
    props.limit,
    category,
    myFilesChecked,
    course,
  ]);

  const afterDelete = () => {
    let url = new URL(`${process.env.REACT_APP_BACKEND_URL}/file/retrievelist`);
    url.searchParams.append("course", course);

    if (category !== undefined) {
      url.searchParams.append("category", category);
    }
    url.searchParams.append("limit", props.limit);
    url.searchParams.append("skip", offset);
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
        } else {
          let offsetcal = result.numOfFiles - props.limit;
          if (offsetcal < 0) offsetcal = 0;
          setoffset(offsetcal);
          setfileList(result.filelist);
        }

        setpageCount(Math.ceil(result.numOfFiles / props.limit));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageClick = (data) => {
    let selected = data.selected;
    setoffset(Math.ceil(selected * props.limit));
  };

  let categoryDisplay = "";

  if (category === "notes") categoryDisplay = "Notes";
  else if (category === "video") categoryDisplay = "Video Lectures";
  else if (category === "assignment") categoryDisplay = "Assignments";
  else if (category === "testpaper") categoryDisplay = "Sample Test Papers";

  return (
    <>
      <h2 className="text-center mb-4 pb-3 text-white">{categoryDisplay}</h2>
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
                  setoffset(0);
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
                  setoffset(0);
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

        <div className="filepage__files">
          <FormGroup>
            <div className="filestrip-header">
              <div className="filestrip-header__filename">
                <h5>Filename</h5>
              </div>
              <div className="filestrip-header__subject">
                <h5>Subject</h5>
              </div>
              <div className="filestrip-header__dateuploaded">
                <h5>Date Uploaded</h5>
              </div>
              <div className="filestrip-header__uploadedby">
                <h5>Uploaded By</h5>
              </div>
              <div className="filestrip-header__action">
                <h5>Action</h5>
              </div>
              {(user.role === "faculty" || user.role === "admin") && (
                <div className="filestrip-header__delete">
                  <h5>Action</h5>
                </div>
              )}
            </div>
            {fileList.map((file) => (
              <FileStrip key={file._id} file={file} afterDelete={afterDelete} />
            ))}
          </FormGroup>
          <FormGroup>
            <ReactPaginate
              previousLabel={<span aria-hidden="true">&laquo;</span>}
              nextLabel={<span aria-hidden="true">&raquo;</span>}
              breakLabel={"..."}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              pageCount={pageCount}
              forcePage={offset / props.limit}
              marginPagesDisplayed={0}
              pageRangeDisplayed={4}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={""}
              activeClassName={"active"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
}

export default ViewFiles;
