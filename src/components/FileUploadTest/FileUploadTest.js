import React, { useEffect, useState } from 'react';
import { Progress } from 'reactstrap';

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

    return (
      <div>
        <form onSubmit={uploadFile}>
          <input id="file-field" type="file" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">--Please choose an option--</option>
              <option value="assignment">Assignment</option>
              <option value="testpaper">Test Paper</option>
              <option value="notes">Notes</option>
           </select>
           <select value={subject} onChange={(e) => setSubject(e.target.value)} >
              <option value="">--Please choose an options--</option>
              {
                subjectList.map((sub) => <option value={sub._id} key={sub._id}>{sub.title}</option>)
              }
           </select>

            <input type="submit" />
        </form>
        {loading &&  <Progress animated max={totalData} value={loadedData} />}
        {loaded && <h1>File Successfully uploaded! </h1>}
    </div>
    )
}

export default FileUploadTest;