import React from 'react'

export default function FileStrip(props) {

   
    return (
        
        <div className="filestrip">
            <div className="filestript__filename">{props.file.filename}</div>
            <div className="filestrip__subject">{props.file.subject.title}</div>
            <div className="filestrip__dateuploaded">{props.file.createdAt}</div>
            <div className="filestrip__uploadedby">{`${props.file.owner.firstname} ${props.file.owner.lastname}`}</div>
            <div className="filestrip__action" ><a href={`http://localhost:4000/file/download/${props.file._id}`} download>Download</a></div>
        </div>
        
    )
}
