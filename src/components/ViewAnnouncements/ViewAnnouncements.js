import React, {useState, useEffect,} from 'react';
import "./ViewAnnouncements.css";
import swal from 'sweetalert';
import { Card, CardTitle, CardBody, Button, Form, FormGroup, Label  } from 'reactstrap';
import { useRouteMatch, useHistory } from 'react-router-dom';

const ViewAnnouncements = () => {

    const history = useHistory();

    let { path } = useRouteMatch();
    
    const [announcements, setAnnouncements] = useState([]);

    const fetchCall = () => {
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
    }

    useEffect(() => {
        fetchCall();
    }, [])

    const onDelete = (d_id) => {
        fetch(`http://localhost:4000/announcement/remove/${d_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })
          .then((response) => response.json())
          .then((result) => {
            if(result === 'Deletion successful') {
                swal('deleted');
                fetchCall();
            }
                else 
                swal('Not deleted')
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
        }

    
    return (

        <div className="container">
            <Form autoComplete="off">
                <FormGroup align="center">
                    <Label>ALL ANNOUNCEMENTS</Label>
                </FormGroup>
                {
                    announcements.map((announcement) =>
                        <Card className="maincard" key={announcement._id}>
                            <CardBody >
                                <CardTitle onClick={() => history.push(`${path}/${announcement._id}`)}> {announcement.title} </CardTitle>
                                    <Button onClick={() => {
                                        onDelete(announcement._id)
                                    }}>
                                        Delete
                                    </Button>
                                </CardBody> 
                        </Card>
                    )
                }
            </Form>
        </div>
    );
}

export default ViewAnnouncements;