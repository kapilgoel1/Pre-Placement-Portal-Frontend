import React, {useState, useEffect,} from 'react';
import "./ViewAnnouncements.css";
import { Card, CardTitle, Button, CardBody, Form, FormGroup, Label  } from 'reactstrap';
import { Link, useRouteMatch } from 'react-router-dom';

const ViewAnnouncements = () => {

    let { path } = useRouteMatch();
    
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/announcement/retrieve', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then((result) => {
            setAnnouncements(result.announcementList);
        })
        .catch((err) => {
          console.log(err);
        });
        
    }, [])
    
    return (

        <div className="container">
            <Form autoComplete="off">
                <FormGroup align="center">
                    <Label>ADD ANNOUNCEMENT</Label>
                </FormGroup>
                {
                    announcements.map((announcement) =>
                        <Card className="maincard" key={announcement._id}>
                            <Link to={`${path}/${announcement._id}`}>
                                <CardBody>
                                    <CardTitle> {announcement.title}</CardTitle>
                                    <Button color="primary">Description</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    )
                }
            </Form>
        </div>
    );
}

export default ViewAnnouncements;