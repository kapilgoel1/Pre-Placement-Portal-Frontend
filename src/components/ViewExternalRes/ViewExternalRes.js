import React, {useState, useEffect} from 'react';
import "./ViewExternalRes.css";
import { Card, CardBody, Form, FormGroup, Label  } from 'reactstrap';
import { useRouteMatch, useHistory } from 'react-router-dom';

const ViewExternalRes = () => {

    const history = useHistory();

    let { path } = useRouteMatch();
    
    const [resources, setResources] = useState([]);

    useEffect(() => {
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
    }, [])
    
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
                                    LINK: {resource.link}
                                </FormGroup>
                            </CardBody> 
                        </Card>
                    )
                }
            </Form>
        </div>
    );
}

export default ViewExternalRes;