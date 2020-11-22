import React, { useState, useEffect } from "react";
import "./ViewDetailAnnouncement.css";
import { Form, Card, CardBody, Label, FormGroup } from "reactstrap";
import { useParams } from "react-router-dom";

const ViewDetailAnnouncement = () => {
  let { id } = useParams();

  const [announcementDetail, setAnnouncementDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/announcement/details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setAnnouncementDetail(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="containerj">
      <Card className="view-detail-announcement-form">
        <CardBody className="upload-form">
          <Form autoComplete="off">
            <FormGroup align="center">
              <Label>{announcementDetail.title}</Label>
            </FormGroup>
            <hr />
            <FormGroup>
              <Label> {announcementDetail.content} </Label>
            </FormGroup>
            <FormGroup>DATE AND TIME: {announcementDetail.createdAt}</FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewDetailAnnouncement;
