import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Breadcrumb } from "reactstrap";
import DashboardAnnouncement from "../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import SearchBar from "../SearchBar/SearchBar";
import "./StudentMenu.scss";

const cardArray = [
  {
    title: "Notes",
    desc: "All the uploaded notes are available here.",
    link: "/files/notes",
  },
  {
    title: "Video Lectures",
    desc: "The video lectures uploaded can be viewed here.",
    link: "/files/video",
  },
  {
    title: "Online Resources",
    desc: "The external links uploaded can be viewed here.",
    link: "/viewexternallinks",
  },
  {
    title: "Sample Test Papers",
    desc: "You can check for uploaded test papers and test links here.",
    link: "/files/testpaper",
  },
  {
    title: "Online Mock Tests",
    desc: "Links to mock tests are available here.",
    link: "/viewtests",
  },
  {
    title: "Placement Preparation Content",
    desc:
      "Content such as notes, video lectures and external resources are available here.",
    link: "/placementpreparation",
  },
  {
    title: "Practice Tests",
    desc: "You can check for uploaded test papers and test links here.",
    link: "/practicetests",
  },
  {
    title: "Assignments",
    desc:
      "All the uploaded assignments are available here. You can also submit the solution file for the assignment.",
    link: "/viewassignments",
  },
  {
    title: "Resume Builder",
    desc: "It allow you to plug in information and build a cohesive resume.",
    link: "/resumebuilder",
  },
  {
    title: "Jobs",
    desc: "You can click here for all the job content uploaded.",
    link: "/viewjobs",
  },
  {
    title: "Internships",
    desc: "You can click here for all the job content uploaded.",
    link: "/viewinternships",
  },
];

function StudentMenu() {
  let history = useHistory();

  const [searchText, setSearchText] = useState("");
  let cardList;

  if (searchText === "") {
    cardList = (
      <div className="icontainer">
        <div
          className="icard"
          onClick={() => history.push("/placementpreparation")}
          id="placementpreparation"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Placement Preparation Content</h3>
            <p>
              Content such as notes, video lectures and external resources are
              available here.
            </p>
          </div>
        </div>

        <div
          className="icard"
          onClick={() => history.push("/practicetests")}
          id="practicetests"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Practice Tests</h3>
            <p>You can check for uploaded test papers and test links here.</p>
          </div>
        </div>

        <div
          className="icard"
          onClick={() => history.push("/viewassignments")}
          id="viewassignments"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Assignments</h3>
            <p>
              All the uploaded assignments are available here. You can also
              submit the solution file for the assignment.{" "}
            </p>
          </div>
        </div>
        <div
          className="icard"
          onClick={() => history.push("/resumebuilder")}
          id="resumebuilder"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Resume Builder</h3>
            <p>
              It allow you to plug in information and build a cohesive resume.
            </p>
          </div>
        </div>

        <div
          className="icard"
          onClick={() => {
            history.push("/viewjobs");
          }}
          id="viewjobs"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Jobs</h3>
            <p>You can click here for all the job content uploaded.</p>
          </div>
        </div>

        <div
          className="icard"
          onClick={() => {
            history.push("/viewinternships");
          }}
          id="viewinternships"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Internships</h3>
            <p>You can click here for all the job content uploaded.</p>
          </div>
        </div>
      </div>
    );
  } else {
    let filteredCardArray = cardArray.filter((card) => {
      return card.title.toLowerCase().includes(searchText.toLowerCase());
    });

    cardList = filteredCardArray.map((card) => {
      return (
        <div
          className="icard"
          onClick={() => {
            history.push(`${card.link}`);
          }}
          id={card.title}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="ocontainer">
        <div className="mcontainer">
          <Breadcrumb className="bread">
            <SearchBar onSearch={setSearchText} searchText={searchText} />
          </Breadcrumb>

          <div className="icontainer">{cardList}</div>
        </div>
        <DashboardAnnouncement />
      </div>
    </>
  );
}

export default StudentMenu;
