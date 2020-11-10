import React, { useEffect, useState } from 'react';
import './FileUploadTest.css'
import { Progress,Form, Col, Row, Label, FormGroup } from 'reactstrap';

const FileUploadTest = () => {

  const [totalData, setTotalData] = useState(0);
  const [loadedData, setLoadedData] = useState(0)
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [category, setCategory] = useState("")
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



  // <Form>
  //       <FormGroup>
  //         <label htmlFor="exampleFormControlInput1">Email address</label>
  //         <Input
  //           id="exampleFormControlInput1"
  //           placeholder="name@example.com"
  //           type="email"
  //         ></Input>
  //       </FormGroup>
  //       <FormGroup>
  //         <label htmlFor="exampleFormControlSelect1">Example select</label>
  //         <Input id="exampleFormControlSelect1" type="select">
  //           <option>1</option>
  //           <option>2</option>
  //           <option>3</option>
  //           <option>4</option>
  //           <option>5</option>
  //         </Input>
  //       </FormGroup>
  //       <FormGroup>
  //         <label htmlFor="exampleFormControlSelect2">
  //           Example multiple select
  //         </label>
  //         <Input
  //           id="exampleFormControlSelect2"
  //           multiple="multiple"
  //           type="select"
  //         >
  //           <option>1</option>
  //           <option>2</option>
  //           <option>3</option>
  //           <option>4</option>
  //           <option>5</option>
  //         </Input>
  //       </FormGroup>
  //       <FormGroup>
  //         <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
  //         <Input id="exampleFormControlTextarea1" rows="3" type="textarea"></Input>
  //       </FormGroup>
  //     </Form>

    return (
      <div className="containerj">
        <Row>
        <Form onSubmit={uploadFile}>
          <FormGroup>
          <Col md={3}>
            <label>Upload a file</label>
            <input id="file-field" type="file" />
          </Col>
          </FormGroup>
          <FormGroup>
          <Col md={3}>
            <Label>Category</Label>

            <select value={category} className="select" onChange={(e) => setCategory(e.target.value)} required>
              <option value="">--Please choose an option--</option>
              <option value="assignment">Assignment</option>
              <option value="testpaper">Test Paper</option>
              <option value="notes">Notes</option>
           </select>
           </Col>
           </FormGroup>
           <FormGroup>
           <Col md={3}>
           <Label>Subject</Label>
           <select value={subject} className="select" onChange={(e) => setSubject(e.target.value)} >
              <option value="">--Please choose an option--</option>
              {
                subjectList.map((sub) => <option value={sub._id} key={sub._id}>{sub.title}</option>)
              }
           </select>
           
           </Col>
           </FormGroup>
           <FormGroup>
           <Col md={3}>

            <input type="submit" />
            </Col>
            </FormGroup>
        </Form>
        </Row>
        {loading &&  <Progress animated max={totalData} value={loadedData} />}
        {loaded && <h1>File Successfully uploaded! </h1>}
    </div>
    )
}

export default FileUploadTest;