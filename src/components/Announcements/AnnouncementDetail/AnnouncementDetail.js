import React, { useState, useEffect } from "react";
import "./AnnouncementDetail.scss";
import { Form, Card, CardBody, Label, FormGroup } from "reactstrap";
import formatDate from "../../../utils";
import { useParams } from "react-router-dom";

const AnnouncementDetail = () => {
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
              <Label style={{ whiteSpace: "pre-line" }}>
                {" "}
                {announcementDetail.content}{" "}
              </Label>
            </FormGroup>
            <FormGroup>
              DATE : {formatDate(announcementDetail.createdAt)}
            </FormGroup>
            {announcementDetail.filename !== "" && (
              <a
                href={`http://localhost:4000/announcement/attachment?filename=${announcementDetail.filename}`}
                className=""
                download
              >
                {announcementDetail.filename}
              </a>
            )}
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AnnouncementDetail;
