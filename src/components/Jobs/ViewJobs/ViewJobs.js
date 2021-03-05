import React, { useState, useEffect, useContext } from "react";
import { Card, CardBody, FormGroup, Button } from "reactstrap";
import swal from "sweetalert";
import AuthContext from "../../../AuthContext";
import "./ViewJobs.scss";

const ViewJobs = () => {
  const { user } = useContext(AuthContext);
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
    let controller = new AbortController();

    fetch("http://localhost:4000/jobposting/retrieve", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((result) => {
        setJobs(result.postings);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      controller.abort();
    };
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
    <div className="job-container">
      <div className="job-card mx-1">
        <FormGroup align="center">
          <h3 className="text-white mb-4 pb-3">Jobs Available</h3>
        </FormGroup>
        {jobs.map((job) => (
          <Card key={job._id} className="mb-3 ">
            <CardBody>
              <FormGroup className="mb-4">
                <h3>{job.role}</h3>
                <h5>{job.company}</h5>
              </FormGroup>
              {job.requirements !== "" && (
                <FormGroup>
                  <h6>JOB REQUIREMENTS</h6>
                  <p className="text-muted jobprofile">{job.requirements}</p>
                </FormGroup>
              )}
              {job.description !== "" && (
                <FormGroup>
                  <h6>JOB PROFILE</h6>
                  <p className="text-muted jobprofile">{job.description}</p>
                </FormGroup>
              )}
              {job.salary !== "" && (
                <FormGroup>
                  <h6>Salary</h6>
                  <p className="text-muted">{job.salaryrange}</p>
                </FormGroup>
              )}

              {user.role === "faculty" && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(job._id);
                  }}
                  className="mt-2"
                  color="color2"
                >
                  Delete
                </Button>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewJobs;
