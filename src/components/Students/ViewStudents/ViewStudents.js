import React, { useEffect, useState } from "react";
import DCard from "../../DCard/DCard";
import StudentStrip from "../StudentStrip/StudentStrip";
import "./ViewStudents.scss";

const ViewStudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/manageusers/retrieve?role=student`,
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
        setStudents(result.userlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3 className="text-white" align="center">
        STUDENTS
      </h3>
      <DCard width="700px">
        <div className="studentstrip-header">
          <div className="studentstrip-header__id">
            <h5>ID</h5>
          </div>
          <div className="studentstrip-header__name">
            <h5>NAME</h5>
          </div>
        </div>
        {students.map((student) => (
          <StudentStrip key={student._id} student={student} />
        ))}
      </DCard>
    </div>
  );
};

export default ViewStudentList;
