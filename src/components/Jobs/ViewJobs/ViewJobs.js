import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardBody, FormGroup } from "reactstrap";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../AuthContext";
import CourseContext from "../../../CourseContext";
import "./ViewJobs.scss";

const ViewJobs = () => {
  const { user } = useContext(AuthContext);
  const { course } = useContext(CourseContext);
  const [jobs, setJobs] = useState([]);
  let history = useHistory();

  const fetchCall = () => {
    fetch(
      `http://localhost:4000/jobposting/retrieveoptimised?course=${course}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
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

    fetch(`http://localhost:4000/jobposting/retrieve?course=${course}`, {
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
  }, [course]);

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

  const applyForJob = (jobId) => {
    fetch(`http://localhost:4000/jobposting/checkresumepresence`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.hasresume) {
          swal({
            title: "Confirmation!",
            text: "Do you want to apply for this job?",
            icon: "warning",
            buttons: ["No", "Apply"],
            dangerMode: false,
          }).then((willApply) => {
            if (willApply) {
              fetch(`http://localhost:4000/jobposting/apply/${jobId}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
              })
                .then((response) => response.json())
                .then((result) => {
                  if (result)
                    swal(result.message, {
                      icon: "success",
                    });
                });
            }
          });
        } else {
          swal({
            title: "Apply without uploading resume?",
            text:
              "Generate your resume with the resume builder on the site before applying for the job!",
            icon: "warning",
            buttons: ["Build Resume", "Apply Without Uploading Resume"],
            dangerMode: true,
          }).then((willApply) => {
            if (willApply) {
              fetch(`http://localhost:4000/jobposting/apply/${jobId}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
              })
                .then((response) => response.json())
                .then((result) => {
                  if (result)
                    swal(result.message, {
                      icon: "success",
                    });
                });
            } else {
              history.push("/resumebuilder");
            }
          });
        }
      });
  };

  const viewApplicants = (jobId) => {
    history.push(`/viewapplicants/${jobId}`);
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
                <h5>Company - {job.company}</h5>
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
              {job.salaryrange !== "" && (
                <FormGroup>
                  <h6>Salary</h6>
                  <p className="text-muted">{job.salaryrange}</p>
                </FormGroup>
              )}

              {user.role === "student" && (
                <Button
                  onClick={() => {
                    applyForJob(job._id);
                  }}
                  className="mt-2"
                  color="color2"
                >
                  Apply
                </Button>
              )}

              <div className="job-controls">
                {(user.role === "faculty" || user.role === "admin") && (
                  <Button
                    onClick={() => {
                      viewApplicants(job._id);
                    }}
                    className="mt-2"
                    color="color2"
                  >
                    View Applicants ({job.applicants})
                  </Button>
                )}

                {(user.role === "faculty" || user.role === "admin") && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(job._id);
                    }}
                    className="mt-2"
                    color="color2"
                    style={{ marginLeft: "auto" }}
                  >
                    Delete
                  </Button>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewJobs;
