import React from "react";
import "./AboutUs.scss";
import Image from "../../assets/Image1.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="back">
        <img className="img" src={Image} alt={Image} />
        <div className="about" align="center">
          <u>
            <h1>ABOUT PRE-PLACEMENT PORTAL</h1>
          </u>
        </div>
      </div>
      <div className="about">
        Jagan Institute of Management Studies (JIMS) imparts professional
        education at post graduate and graduate levels in the fields of
        Management and Information Technology. The Institute has been working
        for the attainment of a mission: to develop highly skilled and
        professional human resource for industry and business for the past 25
        years.
        <br />
        <br />
        Our GGSIP University affiliated programs are MCA, BBA and BCA. The MCA
        programme is accredited by National Board of Accreditation (NBA) for
        both the shifts. The National Assessment and Accreditation council
        (NAAC) has accredited JIMS at A grade.
        <br />
        <br />
        The challenges in today’s global and highly competitive markets are
        immense; and one needs to perform with utmost quality and
        professionalism. It has always been our desire to enhance career
        prospects of our students though excellent teaching, training and
        placement support and expect every student of ours to rise high in their
        career. We make sure that each of our students be given right industry
        exposure and get hold of requisite skill to meet the high end corporate
        expectations.
        <br />
        <br />
        The Placement Cell of the Institute intends to provide Training in the
        pre-placement stage which is immensely required for grabbing a lucrative
        job and also provide placement assistance to all students. Industry is
        always on the lookout for students with good academic background, who
        are vibrant, energetic, attentive, fast learners, adaptive, good
        communicator and ready to accept challenges. The Institute is committed
        to offer right talent at right place.
        <br />
        <br />
        <h3>OBJECTIVES</h3>
        <ul>
          <li>
            The purpose of the Placement Cell is to guide students to choose
            right career path and to provide domain knowledge, skill and
            aptitude to cater the manpower requirements of the Industry.
          </li>
          <li>
            The Institute has evolved mechanism for its students wherein they
            are given training and guidance opportunity by the eminent industry
            members and professionals.
          </li>
          <li>
            Maintaining and regularly updating database of students for possible
            placements.
          </li>
          <li>
            Maintaining database of companies and establishing strategic links
            for campus recruitments.
          </li>
          <li>
            Coordinating with companies to understand about their requirements
            and recruitment procedures.
          </li>
          <li>
            Identifying the needs and expectations of the companies to assist
            them in recruiting most suitable candidates.
          </li>
          <li>
            Organizing pre-placement Orientation
            programme/training/workshops/seminars for students to keep them
            up-to-date.
          </li>
          <li>
            Providing all the resources required by students and making them
            placement ready.
          </li>
        </ul>
        <h5>JIMS Rohini Contact Info</h5>
        +91-9871097501 <br /> info@jimsindia.org
      </div>
    </div>
  );
};

export default AboutUs;
