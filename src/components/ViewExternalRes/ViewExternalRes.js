import React, {useState, useEffect, useContext} from 'react';
import "./ViewExternalRes.css";
import swal from 'sweetalert';
import { Card, CardBody, Form, FormGroup, Label, Button } from 'reactstrap';
import { useRouteMatch, useHistory } from 'react-router-dom';
import AuthContext from '../../AuthContext';

const ViewExternalRes = () => {

    const history = useHistory();
    const {userRole} = useContext(AuthContext);
    let { path } = useRouteMatch();
    const [resources, setResources] = useState([]);

    const fetchCall = () => {
        fetch('http://localhost:4000/externalresource/retrieve', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then((result) => {
            setResources(result.resourceList);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchCall();
    }, [])

    const onDelete = (d_id) => {
        fetch(`http://localhost:4000/externalresource/remove/${d_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        .then((response) => response.json())
        .then((result) => {
            if(result === 'Deletion successful') {
                fetchCall();
            }
            else 
                swal('Not deleted');
        })
        .catch((err) => {
            console.log(err);
        });
        }
    
    return (
        <div className="container">
            <Form autoComplete="off">
                <FormGroup align="center">
                    <Label>EXTERNAL RESOURCES</Label>
                </FormGroup>
                {
                    resources.map((resource) =>
                        <Card key={resource._id}>
                            <CardBody onClick={() => history.push(`${path}/${resource._id}`)}>
                                <FormGroup>
                                    TITLE: {resource.title}
                                </FormGroup>
                                <FormGroup>
                                    LINK:<a href={resource.link} target="_blank" rel="noopener noreferrer"> {resource.link} </a>
                                </FormGroup>
                                {userRole==='faculty' &&
                                            <Button onClick={(e) => {
                                                e.stopPropagation();
                                                onDelete(resource._id)
                                            }}>
                                                Delete
                                            </Button>
                                }
                            </CardBody> 
                        </Card>
                    )
                }
            </Form>
        </div>
    );
}

export default ViewExternalRes;