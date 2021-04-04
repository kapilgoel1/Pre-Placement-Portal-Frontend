import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, FormGroup } from "reactstrap";
import "./InternshipApplicants.scss";

const InternshipApplicants = () => {
  const [internshipDetails, setInternshipDetails] = useState({
    applicants: [],
  });

  let { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/internship/details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setInternshipDetails(result);
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
          <h4 className="text-white  ">
            Company - {internshipDetails.company}
          </h4>
          <h4 className="text-white mb-4 pb-3">
            Role - {internshipDetails.role}
          </h4>
        </FormGroup>
        {internshipDetails.applicants.map((applicant) => (
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
                    href={`${process.env.REACT_APP_BACKEND_URL}/resume/view/student?userid=${applicant._id}&name=${applicant.firstname}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Resume
                  </a>
                ) : (
                  <a
                    className="btn btn-color5 disableClick"
                    href={`${process.env.REACT_APP_BACKEND_URL}/resume/view/student?userid=${applicant._id}&name=${applicant.firstname}`}
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

export default InternshipApplicants;
