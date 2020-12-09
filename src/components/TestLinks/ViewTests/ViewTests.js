import React, { useState, useEffect, useContext } from "react";
import { Card, CardBody, FormGroup, Button } from "reactstrap";
import swal from "sweetalert";
import { useRouteMatch, useHistory } from "react-router-dom";
import AuthContext from "../../../AuthContext";
import "./ViewTests.scss";

const ViewTests = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  let { path } = useRouteMatch();
  const [tests, setTests] = useState([]);

  const fetchCall = () => {
    fetch("http://localhost:4000/test/retrieve", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setTests(result.testList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCall();
  }, []);

  const onDelete = (d_id) => {
    fetch(`http://localhost:4000/test/remove/${d_id}`, {
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
        } else swal("Not deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="test-container">
      <div className="test-card mx-1">
        <FormGroup align="center">
          <h3 className="text-white">TESTS</h3>
        </FormGroup>
        {tests.map((test) => (
          <Card key={test._id} className="mb-3">
            <CardBody onClick={() => history.push(`${path}/${test._id}`)}>
              <FormGroup>
                <h4>{test.title}</h4>
              </FormGroup>
              <FormGroup>
                <h6>TEST LINK</h6>
                <a href={test.link} target="_blank" rel="noopener noreferrer">
                  {test.link}
                </a>
              </FormGroup>
              <FormGroup>
                <h6>TEST DETAILS</h6>
                <p className="text-muted">{test.detail}</p>
              </FormGroup>
              {user.role === "faculty" && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(test._id);
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

export default ViewTests;
