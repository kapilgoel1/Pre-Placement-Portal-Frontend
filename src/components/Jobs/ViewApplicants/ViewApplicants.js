import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, FormGroup } from "reactstrap";
import "./ViewApplicants.scss";

const ViewApplicants = () => {
  const [jobDetails, setJobDetails] = useState({ applicants: [] });

  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/jobposting/details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setJobDetails(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="job-container">
      <div className="job-card mx-1">
        <FormGroup align="center">
          <h3 className="text-white  ">Job Applications</h3>
          <h4 className="text-white  ">Company - {jobDetails.company}</h4>
          <h4 className="text-white mb-4 pb-3">Role - {jobDetails.role}</h4>
        </FormGroup>
        {jobDetails.applicants.map((applicant) => (
          <Card key={applicant._id} className="mb-3 ">
            <CardBody>
              <FormGroup className="mb-4">
                <h3>{applicant.email}</h3>
                <h5>{`${applicant.firstname} ${applicant.lastname} `}</h5>
                <h5>{`${applicant.phone}`}</h5>
              </FormGroup>

              <div className="job-controls">
                {applicant.hasresume ? (
                  <a
                    className="btn btn-color5"
                    href={`http://localhost:4000/resume/view/student?userid=${applicant._id}&name=${applicant.firstname}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Resume
                  </a>
                ) : (
                  <a
                    className="btn btn-color5 disableClick"
                    href={`http://localhost:4000/resume/view/student?userid=${applicant._id}&name=${applicant.firstname}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume not uploaded
                  </a>
                )}
                <a
                  className="btn btn-color5 "
                  href={`/viewstudent/${applicant._id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile
                </a>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewApplicants;
