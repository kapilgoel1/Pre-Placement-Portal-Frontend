import React from "react";
import "./DeveloperTeam.scss";

const DeveloperTeam = () => {
  return (
    <div className="developer">
      <h1 align="center">MEET THE TEAM</h1>
      <h5 align="center">
        "Individuals can and do make a difference, but it takes a team to really
        mess things up"
      </h5>
      <br />
      <div align="center">
        <h6>DEVELOPERS</h6>
        <div className="devCard">
          <h3>KAPIL GOEL</h3>
          <h6>(Full Stack Developer)</h6>
          <p>
            Kapil Goel is a student of MCA 3rd Year. <br />
            He is a full stack developer.{" "}
          </p>
        </div>
        <div className="devCard">
          <h3>NEHA GOEL</h3>
          <h6>(Developer)</h6>
          <p>
            Neha Goel is a student of MCA 3rd Year. <br />
            She is a full stack developer.{" "}
          </p>
        </div>
        <br />
        <br />
        <h6>DOCUMENTATION</h6>
        <div className="devCard">
          <h3>SONALI PRAJAPATI</h3>
          <h6>(Technical Documentation Writer)</h6>
          <p>
            Sonali Prajapati is a student of MCA 3rd Year. <br />
            She is responsible for all of the documentation of this website.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTeam;
