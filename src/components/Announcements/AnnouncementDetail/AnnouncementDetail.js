import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, Form, FormGroup, Label } from "reactstrap";
import formatDate from "../../../utils";
import "./AnnouncementDetail.scss";

const AnnouncementDetail = () => {
  let { id } = useParams();

  const [announcementDetail, setAnnouncementDetail] = useState({});

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/announcement/detailsoptimised/${id}`,
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

            {announcementDetail.filename !== "" && (
              <FormGroup>
                <a
                  href={`${process.env.REACT_APP_BACKEND_URL}/announcement/attachment?filename=${announcementDetail.filename}`}
                  className=""
                  download
                >
                  {announcementDetail.filename}
                </a>
              </FormGroup>
            )}
            {announcementDetail.link !== "" && (
              <FormGroup>
                <a
                  href={`${announcementDetail.link}`}
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  {announcementDetail.link}
                </a>
              </FormGroup>
            )}
            <FormGroup>
              DATE : {formatDate(announcementDetail.createdAt)}
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AnnouncementDetail;
