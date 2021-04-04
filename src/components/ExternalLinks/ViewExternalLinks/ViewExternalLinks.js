import React, { useContext, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Button, Card, CardBody, FormGroup } from "reactstrap";
import swal from "sweetalert";
import AuthContext from "../../../AuthContext";
import CourseContext from "../../../CourseContext";
import "./ViewExternalLinks.scss";

const ViewExternalRes = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { course } = useContext(CourseContext);
  let { path } = useRouteMatch();
  const [resources, setResources] = useState([]);

  const fetchCall = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/externalresource/retrieveoptimised?course=${course}`,
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
        setResources(result.resourceList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCall();
  });

  const onDelete = (d_id) => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/externalresource/remove/${d_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
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
    <div className="link-container">
      <div className="link-card mx-1">
        <FormGroup align="center">
          <h3 className="text-white">ONLINE RESOURCES</h3>
        </FormGroup>
        {resources.map((resource) => (
          <Card key={resource._id} className="mb-3">
            <CardBody onClick={() => history.push(`${path}/${resource._id}`)}>
              <FormGroup>
                <h4>{resource.title}</h4>
              </FormGroup>
              <FormGroup>
                <h6>LINK</h6>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.link}
                </a>
              </FormGroup>
              {(user.role === "faculty" || user.role === "admin") && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(resource._id);
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

export default ViewExternalRes;
