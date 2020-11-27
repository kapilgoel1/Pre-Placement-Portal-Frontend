import React from "react";
import { Card, CardBody } from "reactstrap";
import "./DCard.scss";

function DCard(props) {
  let inlinestyle = {};
  if (props.width) {
    inlinestyle = {
      width: props.width,
    };
  }
  return (
    <div className="containerj py-5">
      <Card className="file-upload-form" color="color1" style={inlinestyle}>
        <CardBody className="upload-form">{props.children}</CardBody>
      </Card>
    </div>
  );
}

export default DCard;
