import React, {useState, useEffect} from 'react';
import { Card, CardBody, Form, FormGroup, Label  } from 'reactstrap';
import { useRouteMatch, useHistory } from 'react-router-dom';

const ViewAllTests = () => {

    const history = useHistory();

    let { path } = useRouteMatch();
    
    const [tests, setTests] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/test/retrieve', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then((result) => {
            setTests(result.testList);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])
    
    return (

        <div className="container">
            <Form autoComplete="off">
                <FormGroup align="center">
                    <Label>TESTS UPLOADED</Label>
                </FormGroup>
                {
                    tests.map((test) =>
                        <Card key={test._id}>
                            <CardBody onClick={() => history.push(`${path}/${test._id}`)}>
                                <FormGroup>
                                    TITLE: {test.title}
                                </FormGroup>
                                <FormGroup>
                                    LINK: {test.link}
                                </FormGroup>
                                <FormGroup>
                                    DETAIL: {test.detail}
                                </FormGroup>
                            </CardBody> 
                        </Card>
                    )
                }
            </Form>
        </div>
    );
}

export default ViewAllTests;