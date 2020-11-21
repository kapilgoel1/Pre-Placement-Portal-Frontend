import React, {useState, useEffect} from 'react';
import { Card, CardBody, Form, FormGroup, Label  } from 'reactstrap';
import { useRouteMatch, useHistory } from 'react-router-dom';

const ViewJobPostings = () => {

    const history = useHistory();

    let { path } = useRouteMatch();
    
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/jobposting/retrieve', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        .then(response => response.json())
        .then((result) => {
            setJobs(result.postings);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])
    
    return (

        <div className="container">
            <Form autoComplete="off">
                <FormGroup align="center">
                    <Label>JOB POSTINGS</Label>
                </FormGroup>
                {
                    jobs.map((job) =>
                        <Card key={job._id}>
                            <CardBody onClick={() => history.push(`${path}/${job._id}`)}>
                                <FormGroup>
                                    COMPANY: {job.company}
                                </FormGroup>
                                <FormGroup>
                                    JOB PROFILE: {job.jobprofile}
                                </FormGroup>
                                <FormGroup>
                                    PACKAGE: {job.package}
                                </FormGroup>
                            </CardBody> 
                        </Card>
                    )
                }
            </Form>
        </div>
    );
}

export default ViewJobPostings;