import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, FormGroup } from "reactstrap";

function ViewSubmittedAssignments() {
  const [assignment, setAssignment] = useState({ submittedassignments: [] });
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/file/filedetails/${id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setAssignment(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <FormGroup align="center">
        <h3 className="text-white ">Submitted Assignments</h3>
        <h3 className="text-white mb-4 pb-3">{assignment.filename}</h3>
      </FormGroup>
      <div className="job-container">
        <div className="job-card">
          <Card className="mb-3 ">
            <CardBody>
              <ol>
                {assignment.submittedassignments.map((submittedAssignment) => (
                  <li key={submittedAssignment._id} className="h6">
                    <a
                      href={`http://localhost:4000/file/submittedassignment?filename=${submittedAssignment.filename}`}
                      className=""
                      download
                    >{`${submittedAssignment.firstname} ${submittedAssignment.lastname} (${submittedAssignment.email})`}</a>
                  </li>
                ))}
              </ol>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ViewSubmittedAssignments;
