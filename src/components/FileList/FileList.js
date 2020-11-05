import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import FileStripp from '../FileStrip/FileStripp'
import {Input} from 'reactstrap'
import './FileList.css'


export default function FileList(props) {

    const [searchField, setsearchField] = useState('');
    const [subject, setsubject] = useState('');
    const [fileList, setfileList] = useState([]);
    const [subjectList, setsubjectList] = useState([]);
    const [pageCount, setpageCount] = useState(5)
    const [offset, setoffset] = useState(0)

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
        console.log('limit', props.limit);
        let url = new URL('http://localhost:4000/file/retrievelist');
        url.searchParams.append('limit', props.limit); 
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
            setpageCount(Math.ceil(result.numOfFiles/props.limit))
          })
          .catch((err) => {
            console.log(err);
          });
      }, [offset, subject, searchField, props.limit])

     
      const handlePageClick = (data) => {
        let selected = data.selected;
        setoffset(Math.ceil(selected * props.limit));     
      }

    return (
        <div>
        <Input type="search" placeholder="Search File" onChange={(e) =>{ setsearchField(e.target.value); setoffset(0)}} />
        
        <Input type="select" value={subject} onChange={(e) =>{ setsubject(e.target.value);  setoffset(0)} }>
              <option value="">All</option>
              {
                subjectList.map((sub) => <option value={sub._id} key={sub._id}>{sub.title}</option>)
              }
        </Input>
        <div className="filestrip-header">
        <div className="filestrip-header__filename"><h5>Filename</h5></div>
        <div className="filestrip-header__subject"><h5>Subject</h5></div>
        <div className="filestrip-header__dateuploaded"><h5>Date Uploaded</h5></div>
        <div className="filestrip-header__uploadedby"><h5>Uploaded By</h5></div>
        <div className="filestrip-header__action" ><h5>Action</h5></div>
    </div>
        {
            fileList.map((file) => <FileStripp key={file._id} file = {file} /> )
        }


        

        <ReactPaginate
        previousLabel={<span aria-hidden="true">&laquo;</span>}
        nextLabel={<span aria-hidden="true">&raquo;</span>}
        breakLabel={'...'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        pageCount={pageCount}       
        forcePage={offset/props.limit}
        marginPagesDisplayed={0}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={''}
        activeClassName={'active'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
      />
        </div>
    )
}
