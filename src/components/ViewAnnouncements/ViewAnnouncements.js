import React, { useState } from 'react';
import "./ViewAnnouncements.css";
import { Card, CardImg, CardImgOverlay, CardTitle, Button, CardText } from 'reactstrap';
import FacultyNavBar from "../FacultyNavBar/FacultyNavBar"
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

const ViewAnnouncements = (props) => {
    const tempAnnouncements = [
        {
            id: 1,
            title: "title1",
            content: "content1",
            createdAt: "23 Aug 2020"
        },
        {
            id: 2,
            title: "title2",
            content: "content2",
            createdAt: "23 Aug 2020"
        },
        {
            id: 3,
            title: "title3",
            content: "content3",
            createdAt: "23 Aug 2020"
        },
        {
            title: "title4",
            id: 4,
            content: "content4",
            createdAt: "23 Aug 2020"
        },
        {
            title: "title5",
            id: 5,
            content: "content5",
            createdAt: "23 Aug 2020"
        },
        {
            id: 6,
            title: "title6",
            content: "content6",
            createdAt: "23 Aug 2020"
        },
        {
            id: 7,
            title: "title7",
            content: "content7",
            createdAt: "23 Aug 2020"
        },
        {
            id: 8,
            title: "title8",
            content: "content8",
            createdAt: "23 Aug 2020"
        },
        {
            id: 9,
            title: "title9",
            content: "content9",
            createdAt: "23 Aug 2020"
        },
        {
            id: 10,
            title: "title10",
            content: "content10",
            createdAt: "23 Aug 2020"
        },
    ];

    const RenderAnnouncements = ({ announce }) => {
        if (announce) {
            return (
                <Card className="maincard">
                    <Link to={`/ViewAnnouncements/${announce.id}`}>
                        <Card body>
                            <CardTitle tag="h4" style={{ color: 'black', fontWeight: "normal" }}> {announce.title}</CardTitle>
                            <Button color="primary">Description</Button>
                        </Card>
                    </Link>
                </Card>
            );
        }
        else {
            return (
                <div>No announcements</div>
            );
        }
    }

    const announ = tempAnnouncements.map((announce) => {
        return (
            <div key={announce.id}>
                <RenderAnnouncements announce={announce} />
            </div>
        );
    })


    return (
        <div>
            <FacultyNavBar />
            <div className="container main">
                <center><h2 className="branding">Announcements</h2></center>
                {announ}
            </div>
            <Footer />
        </div>
    );
}

export default ViewAnnouncements;