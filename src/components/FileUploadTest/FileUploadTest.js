import React, { useEffect, useState } from 'react';
import './FileUploadTest.css';
import { Progress, Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

const FileUploadTest = () => {

  const [totalData, setTotalData] = useState(0);
  const [loadedData, setLoadedData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/subject/retrieve', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((result) => {
        setSubjectList(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  , [])

  const uploadFile = (e) => {
    e.preventDefault();
    const file = document.querySelector('#file-field').files[0];
    const formData = new FormData();
    formData.append('multerkey', file);

    var xhrObj = new XMLHttpRequest();  

    xhrObj.upload.onloadstart = () => {
      setTotalData(0);
      setLoadedData(0);
      setLoading(true);
    }

    xhrObj.upload.onprogress  = (evt) => {  
 
      if (evt.lengthComputable) {  
    
        setTotalData(evt.total);
        setLoadedData(evt.loaded);
      }  
  
    }  

    xhrObj.onload = () => {
      setLoading(false)
      setCategory("")
      setSubject("");
      document.querySelector('#file-field').value = "";
      if(xhrObj.status > 300)
        alert('File Upload Error');
      else
      setLoaded(true);
    }


    xhrObj.withCredentials = true;
    let url = new URL('http://localhost:4000/file/add');
    url.searchParams.append('category', category); 

    if(subject !== '')
    url.searchParams.append('subject', subject);

    xhrObj.open('POST', url);
    xhrObj.send(formData);
  }


  return (

    <div className="containerj">
      <Card className="file-upload-form">
        <CardBody className="upload-form">
          <Form onSubmit={uploadFile} autoComplete="off">
            <FormGroup align="center">
              <Label for="upload">UPLOAD A FILE</Label>
              <hr/>
              <Input name="file" id="file-field" type="file" required/>
            </FormGroup>
            <FormGroup>
              <Label for="category">CATEGORY</Label>
              <Input type="select" value={category} className="select" onChange={(e) => setCategory(e.target.value)} required>
                <option value="">--Please choose an option--</option>
                <option value="assignment">Assignment</option>
                <option value="testpaper">Test Paper</option>
                <option value="notes">Notes</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>SUBJECT</Label>
              <Input type="select" value={subject} className="select" onChange={(e) => setSubject(e.target.value)} >
                <option value="">--Please choose an option--</option>
                {
                  subjectList.map((sub) => <option value={sub._id} key={sub._id}>{sub.title}</option>)
                }
              </Input>
            </FormGroup>
            <FormGroup align="center">
              <Button type="submit">SUBMIT</Button>
            </FormGroup>
          </Form>
          {loading &&  <Progress animated max={totalData} value={loadedData} />}
          {loaded && <h1>File Successfully uploaded! </h1>}
        </CardBody>
      </Card>
    </div>
  );
}

export default FileUploadTest;

