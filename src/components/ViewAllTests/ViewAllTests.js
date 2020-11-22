import React, {useState, useEffect, useContext} from 'react';
import { Card, CardBody, Form, FormGroup, Label, Button } from 'reactstrap';
import swal from 'sweetalert';
import { useRouteMatch, useHistory } from 'react-router-dom';
import AuthContext from '../../AuthContext';

const ViewAllTests = () => {

    const history = useHistory();
    const {userRole} = useContext(AuthContext);
    let { path } = useRouteMatch();
    const [tests, setTests] = useState([]);

    const fetchCall = () => {
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
    }

    useEffect(() => {
        fetchCall();
    }, [])

    const onDelete = (d_id) => {
        fetch(`http://localhost:4000/test/remove/${d_id}`, {
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
                swal('Not deleted')
        })
        .catch((err) => {
            console.log(err);
        });
        }
    
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
                                LINK:<a href={test.link} target="_blank" rel="noopener noreferrer"> {test.link} </a>
                                </FormGroup>
                                <FormGroup>
                                    DETAIL: {test.detail}
                                </FormGroup>
                                {
                                    userRole==='faculty' &&
                                        <Button onClick={(e) => {
                                            e.stopPropagation();
                                            onDelete(test._id)
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

export default ViewAllTests;