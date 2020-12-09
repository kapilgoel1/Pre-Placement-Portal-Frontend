import React, { useState, useEffect, useContext } from "react";
import "./ViewAnnouncements.scss";
import swal from "sweetalert";
import { Card, CardTitle, CardBody, Button, Form, FormGroup } from "reactstrap";
import { useRouteMatch, useHistory } from "react-router-dom";
import AuthContext from "../../../AuthContext";

const ViewAnnouncements = () => {
  const history = useHistory();
  let { path } = useRouteMatch();
  const { user } = useContext(AuthContext);
  const [announcements, setAnnouncements] = useState([]);

  const fetchCall = () => {
    fetch("http://localhost:4000/announcement/retrieve", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setAnnouncements(result.announcementList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCall();
  }, []);

  const onDelete = (d_id) => {
    fetch(`http://localhost:4000/announcement/remove/${d_id}`, {
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
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Form autoComplete="off">
        <FormGroup align="center">
          <h3 className="text-white">ANNOUNCEMENTS</h3>
        </FormGroup>
        {announcements.map((announcement) => (
          <Card key={announcement._id} className="announcement-card">
            <CardBody
              onClick={() => history.push(`${path}/${announcement._id}`)}
            >
              <CardTitle> {announcement.title} </CardTitle>
              {user.role === "faculty" && (
                <Button
                  color="color2"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(announcement._id);
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

export default ViewAnnouncements;
