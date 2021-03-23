import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import "./StudentStrip.scss";

function StudentStrip(props) {
  const history = useHistory();
  let { path } = useRouteMatch();

  return (
    <div
      className="studentstrip"
      onClick={() => history.push(`${path}/${props.student._id}`)}
    >
      <div className="studentstrip__id">{props.student.email}</div>
      <div className="studentstrip__name">{`${props.student.firstname} ${props.student.lastname}`}</div>
    </div>
  );
}

export default StudentStrip;
