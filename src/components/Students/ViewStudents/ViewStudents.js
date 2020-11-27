import React, { useState, useEffect } from "react";
import "./ViewStudents.scss";
import { Card, CardTitle, CardBody, Form, FormGroup, Label } from "reactstrap";
import { useRouteMatch, useHistory } from "react-router-dom";

const ViewStudentList = () => {
  const history = useHistory();
  let { path } = useRouteMatch();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/manageusers/retrieve?role=student", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setStudents(result.userlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <Form autoComplete="off">
        <FormGroup align="center">
          <Label>STUDENTS LIST</Label>
        </FormGroup>
        {students.map((student) => (
          <Card key={student._id}>
            <CardBody onClick={() => history.push(`${path}/${student._id}`)}>
              <CardTitle>
                {" "}
                {student.firstname} {student.lastname}
              </CardTitle>
            </CardBody>
          </Card>
        ))}
      </Form>
    </div>
  );
};

export default ViewStudentList;
