// import React, { useState } from 'react';
// import { Modal, Label, Button } from 'reactstrap';
// import './AddNewResModal.css';
// //import Dragndrop from '../Dropzone/Dropzone';

// const AddNewRes = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <button className="functionButtons" onClick={toggle}>{buttonLabel}</button>
//       <Modal isOpen={modal} toggle={toggle} className={className}>
//         <div className="content">
//           <div align="center">ADD RESOURCES HERE</div>
//           <hr/>
//         <Label for="img">Add Test Papers </Label> <br/>
//         <input type="file" id="img" name="img" accept="image/*"></input>
//         <br/><br/>
//         <Label for="img">Add Assignments </Label> <br/>
//         <input type="file" id="img" name="img" accept="image/*"></input>   
//         <br/><br/>
//         <Label for="img">Add PPTs </Label> <br/>
//         <input type="file" id="img" name="img" accept="image/*"></input>
//         <br/><br/>
//         <Label for="img">Add Announcements </Label> <br/>
//         <input type="file" id="img" name="img" accept="image/*"></input>
//         <br/><br/>
//         <Label for="img">Add Videos </Label> <br/>
//         <input type="file" id="img" name="img" accept="image/*"></input>
//         <br/><br/>
//         <Label for="img">Add Weblinks/ External Resources </Label> 
//         <input type="file" id="img" name="img" accept="image/*"></input>
//         <br/><br/>
//         <Label for="img">Add Notes </Label><br/>
//         <input type="file" id="img" name="img" accept="image/*"></input>
//         <br/><br/>
//         <center><Button>UPLOAD</Button></center>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default AddNewRes;