import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardBody, FormGroup } from "reactstrap";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../AuthContext";
import CourseContext from "../../../CourseContext";
import "./ViewInternships.scss";

const ViewInternships = () => {
  const { user } = useContext(AuthContext);
  const { course } = useContext(CourseContext);
  const [internships, setInternships] = useState([]);
  let history = useHistory();

  const fetchCall = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/internship/retrieveoptimised?course=${course}`,
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
        setInternships(result.postings);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let controller = new AbortController();

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/internship/retrieve?course=${course}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        signal: controller.signal,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setInternships(result.postings);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      controller.abort();
    };
  }, [course]);

  const onDelete = (d_id) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/internship/remove/${d_id}`, {
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

  const applyForInternship = (jobId) => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/internship/checkresumepresence`,
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
        if (result.hasresume) {
          swal({
            title: "Confirmation!",
            text: "Do you want to apply for this internship?",
            icon: "warning",
            buttons: ["No", "Apply"],
            dangerMode: false,
          }).then((willApply) => {
            if (willApply) {
              fetch(
                `${process.env.REACT_APP_BACKEND_URL}/internship/apply/${jobId}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  credentials: "include",
                }
              )
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
              "Generate your resume with the resume builder on the site before applying for the internship!",
            icon: "warning",
            buttons: ["Build Resume", "Apply Without Uploading Resume"],
            dangerMode: true,
          }).then((willApply) => {
            if (willApply) {
              fetch(
                `${process.env.REACT_APP_BACKEND_URL}/internship/apply/${jobId}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  credentials: "include",
                }
              )
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
    history.push(`/internshipapplicants/${jobId}`);
  };

  return (
    <div className="job-container">
      <div className="job-card mx-1">
        <FormGroup align="center">
          <h3 className="text-white mb-4 pb-3">Internships Available</h3>
        </FormGroup>
        {internships.map((internship) => (
          <Card key={internship._id} className="mb-3 ">
            <CardBody>
              <FormGroup className="mb-4">
                <h3>{internship.role}</h3>
                <h5>Company - {internship.company}</h5>
              </FormGroup>
              {internship.requirements !== "" && (
                <FormGroup>
                  <h6>JOB REQUIREMENTS</h6>
                  <p className="text-muted jobprofile">
                    {internship.requirements}
                  </p>
                </FormGroup>
              )}
              {internship.description !== "" && (
                <FormGroup>
                  <h6>INTERNSHIP PROFILE</h6>
                  <p className="text-muted jobprofile">
                    {internship.description}
                  </p>
                </FormGroup>
              )}
              {internship.salaryrange !== "" && (
                <FormGroup>
                  <h6>Salary</h6>
                  <p className="text-muted">{internship.salaryrange}</p>
                </FormGroup>
              )}

              {user.role === "student" && (
                <Button
                  onClick={() => {
                    applyForInternship(internship._id);
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
                      viewApplicants(internship._id);
                    }}
                    className="mt-2"
                    color="color2"
                  >
                    View Applicants ({internship.applicants})
                  </Button>
                )}

                {(user.role === "faculty" || user.role === "admin") && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(internship._id);
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

export default ViewInternships;
