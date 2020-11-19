import React, { useState, useEffect } from 'react';
import "./ViewDetailAnnouncement.css";
import { Jumbotron, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

const ViewDetailAnnouncement = () => {
    let { id } = useParams();

    const [announcementDetail, setAnnouncementDetail] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/announcement/details/${id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then((result) => {
            setAnnouncementDetail(result);
        })
        .catch((err) => {
          console.log(err);
        });
        
    }, [id])

    return (
        <div className="container main">
            <center><h2>Announcement</h2></center>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">{announcementDetail.title}</h1>
                    <p className="lead">{announcementDetail.content}</p>
                    <br />
                    <p className="lead"> -- {announcementDetail.createdAt}</p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default ViewDetailAnnouncement;