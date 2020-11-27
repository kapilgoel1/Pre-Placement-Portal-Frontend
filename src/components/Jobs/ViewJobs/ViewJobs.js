import React, { useState, useEffect, useContext } from "react";
import { Card, CardBody, Form, FormGroup, Label, Button } from "reactstrap";
import swal from "sweetalert";
import { useRouteMatch, useHistory } from "react-router-dom";
import AuthContext from "../../../AuthContext";

const ViewJobs = () => {
  const history = useHistory();
  const { userRole } = useContext(AuthContext);
  let { path } = useRouteMatch();
  const [jobs, setJobs] = useState([]);

  const fetchCall = () => {
    fetch("http://localhost:4000/jobposting/retrieve", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setJobs(result.postings);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCall();
  }, []);

  const onDelete = (d_id) => {
    fetch(`http://localhost:4000/jobposting/remove/${d_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === "Deletion successful") {
          fetchCall();
        } else {
          swal("Not deleted");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Form autoComplete="off">
        <FormGroup align="center">
          <Label>JOB POSTINGS</Label>
        </FormGroup>
        {jobs.map((job) => (
          <Card key={job._id}>
            <CardBody onClick={() => history.push(`${path}/${job._id}`)}>
              <FormGroup>COMPANY: {job.company}</FormGroup>
              <FormGroup>JOB PROFILE: {job.jobprofile}</FormGroup>
              <FormGroup>PACKAGE: {job.package}</FormGroup>
              {userRole === "faculty" && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(job._id);
                  }}
                >
                  Delete
                </Button>
              )}
            </CardBody>
          </Card>
        ))}
      </Form>
    </div>
  );
};

export default ViewJobs;
