import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Breadcrumb } from "reactstrap";
import DashboardAnnouncement from "../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import SearchBar from "../SearchBar/SearchBar";
import "./AdminMenu.scss";

const cardArray = [
  {
    title: "Add Content",
    desc:
      "Here you can add contents such as Files, External resuorces, Mock test links and jobs.",
    link: "/addcontent",
  },
  {
    title: "View Content",
    desc:
      "Here you can view the content such as placement prep content(notes, video lectures, etc), practice tests(test papers, test links), assignments and jobs.",
    link: "/viewcontent",
  },
  {
    title: "Students Profiles",
    desc: "Personal information of all the students is available here.",
    link: "/viewstudent",
  },
  {
    title: "Add Notes, Video Lectures, Assignments Or Sample Test Papers",
    desc: "Here you can add the resources.",
    link: "/addfile",
  },
  {
    title: "Add Online Resources",
    desc: "Here you can add any weblink or any other link.",
    link: "/addexternallink",
  },
  {
    title: "Add Online Mock Tests",
    desc: "Link for any kind of test can be added here.",
    link: "/addtest",
  },
  {
    title: "Post Jobs",
    desc:
      "You can add the description such as company, salary, eligibility requirements for job availabilities here.",
    link: "/addjob",
  },
  {
    title: "Post Internships",
    desc:
      "You can add the description such as company, salary, eligibility requirements for job availabilities here.",
    link: "/addinternship",
  },
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
      "All the uploaded assignments are available here. For each assignment, you can also view all the solution files submitted by the students.",
    link: "/viewassignments",
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
  {
    title: "Create Account",
    desc:
      "You can make accounts of student and admin as you wish. Just fill in the basic details and click on create account.",
    link: "/createaccount",
  },
  {
    title: "Manage Accounts",
    desc:
      "All the accounts of faculties and students are displayed here. You can also edit the basic information of any acocunt.",
    link: "/manageaccounts",
  },
  {
    title: "Create Accounts In Bulk",
    desc:
      "All the accounts of faculties and students are displayed here. You can also edit the basic information of any acocunt.",
    link: "/createaccountsinbulk",
  },
];

function AdminMenu() {
  let history = useHistory();

  const [searchText, setSearchText] = useState("");
  let cardList;
  if (searchText === "") {
    cardList = (
      <div className="icontainer">
        <div className="icard" onClick={() => history.push("/addcontent")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Add Content</h3>
            <p>
              Here you can add contents such as Files, External resuorces, Mock
              test links and jobs.
            </p>
          </div>
        </div>

        <div className="icard" onClick={() => history.push("/viewcontent")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>View Content</h3>
            <p>
              Here you can view the content such as placement prep
              content(notes, video lectures, etc), practice tests(test papers,
              test links), assignments and jobs.
            </p>
          </div>
        </div>

        <div className="icard" onClick={() => history.push("/viewstudent")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Students Profiles</h3>
            <p>Personal information of all the students is available here.</p>
          </div>
        </div>

        <div className="icard" onClick={() => history.push("/createaccount")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Create Account</h3>
            <p>
              You can make accounts of student and admin as you wish. Just fill
              in the basic details and click on create account.
            </p>
          </div>
        </div>

        <div className="icard" onClick={() => history.push("/manageaccounts")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Manage Accounts</h3>
            <p>
              All the accounts of faculties and students are displayed here. You
              can also edit the basic information of any acocunt.
            </p>
          </div>
        </div>
        <div
          className="icard"
          onClick={() => history.push("/createaccountsinbulk")}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h3>Create Accounts In Bulk</h3>
            <p>
              All the accounts of faculties and students are displayed here. You
              can also edit the basic information of any acocunt.
            </p>
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
    <div className="ocontainer">
      <div className="mcontainer">
        <Breadcrumb className="bread">
          <SearchBar onSearch={setSearchText} searchText={searchText} />
        </Breadcrumb>
        <div className="icontainer">{cardList}</div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default AdminMenu;
