import React from 'react';
import "./ViewDetailAnnouncement.css";
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import FacultyNavBar from "../../FacultyNavBar/FacultyNavBar"
import Footer from "../../Footer/Footer";
import { Link } from 'react-router-dom';

const ViewDetailAnnouncement = (props) => {

    const RenderAnnouncement = ({ announcement }) => {
        if (announcement != null) {
            return (
                <div className="container main">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/viewannouncements'> Announcements </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {announcement.title}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <center><h2 className="branding">{`Announcement ${announcement.id}`}</h2></center>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">{announcement.title}</h1>
                            <p className="lead">{announcement.content}</p>
                            <br />
                            <p className="lead"> -- {announcement.createdAt}</p>
                        </Container>
                    </Jumbotron>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    return (
        <div>
            <FacultyNavBar />
            <RenderAnnouncement announcement={props.announcement} />
            <Footer />
        </div>
    );
}

export default ViewDetailAnnouncement;