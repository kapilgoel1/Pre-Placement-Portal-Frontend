import React, { useState, useEffect, useContext } from "react";
import "./DashboardAnnouncement.scss";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../AuthContext";
import { Button } from "reactstrap";

function DashboardAnnouncement() {
  const [announcements, setAnnouncements] = useState([]);
  const history = useHistory();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:4000/announcement/retrieve?limit=6", {
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
  }, []);

  return (
    <div className="aouter">
      <div className="announcementcontainer pt-3">
        <h3 className="announcementcontainer__heading text-center mb-3">
          Announcements
        </h3>
        <ul className="announcementcontainer__i">
          {announcements.map((announcement) => {
            return (
              <li
                key={announcement._id}
                className="announcementcontainer__i__point mb-3"
                onClick={() =>
                  history.push(`/viewannouncement/${announcement._id}`)
                }
              >
                {announcement.title}
              </li>
            );
          })}
          <li
            className="announcementcontainer__i__point mb-3"
            onClick={() => history.push("/viewannouncement")}
          >
            More...
          </li>
        </ul>
        {user.role === "faculty" ||
          ("admin" && (
            <Button
              className="btn-block btn-color2 btn-lg"
              onClick={() => {
                history.push("/addannouncement");
              }}
            >
              Add Announcement
            </Button>
          ))}
      </div>
    </div>
  );
}

export default DashboardAnnouncement;
