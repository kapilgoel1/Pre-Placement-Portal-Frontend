import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import FileStripp from '../FileStrip/FileStripp'
import './FileList.css'


export default function FileList() {

    const [searchField, setsearchField] = useState('');
    const [subject, setsubject] = useState('');
    const [fileList, setfileList] = useState([]);
    const [subjectList, setsubjectList] = useState([]);
    const [pageCount, setpageCount] = useState(5)
    const [offset, setoffset] = useState(0)
    const [currentPage, setcurrentPage] = useState(0)

    useEffect(() => {
        fetch('http://localhost:4000/subject/retrieve', {
          method: 'GET',
          credentials: 'include',
        })
          .then((response) => response.json())
          .then((result) => {
            setsubjectList(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      , [])

     

      useEffect(() => {
        let url = new URL('http://localhost:4000/file/retrievelist');
        url.searchParams.append('limit', 2); 
        url.searchParams.append('skip', offset)
        if(subject !== '')
        url.searchParams.append('subject', subject)

        fetch(url, {
          method: 'GET',
          credentials: 'include',
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setfileList(result.filelist);
            setpageCount(Math.ceil(result.numOfFiles/2))
          })
          .catch((err) => {
            console.log(err);
          });
      }, [offset, subject, currentPage])

      const clickhandler = () => {
        let url = new URL('http://localhost:4000/file/retrievelist');
        url.searchParams.append('limit', 2); 
        url.searchParams.append('skip', offset)
        if(subject !== '')
        url.searchParams.append('subject', subject)
        if(searchField !== '')
        url.searchParams.append('filename', searchField);

        fetch(url, {
          method: 'GET',
          credentials: 'include',
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setfileList(result.filelist);
            setpageCount(Math.ceil(result.numOfFiles/2))
          })
          .catch((err) => {
            console.log(err);
          });
      }

      const handlePageClick = (data) => {
        let selected = data.selected;
        setcurrentPage(selected);
        setoffset(Math.ceil(selected * 2));     
      }

    return (
        <div>
        <input type="search" onChange={(e) => setsearchField(e.target.value)}/>
        <button onClick={clickhandler}>Search</button>
        <select value={subject} onChange={(e) =>{ setsubject(e.target.value); setcurrentPage(0); setoffset(0)} }>
              <option value="">All</option>
              {
                subjectList.map((sub) => <option value={sub._id} key={sub._id}>{sub.title}</option>)
              }
        </select>
{
        // <div class="filestrip">
        // <div class="filestrip__">Filename</div>
        // <div>Subject</div>
        // <div>Uploaded On</div>
        // <div>File Type</div>
        // <div>Action</div>
        // </div>
}
        {
            fileList.map((file) => <FileStripp key={file._id} file = {file} /> )
        }


        

        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}       
        forcePage={currentPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
        </div>
    )
}
