import React, { useState } from 'react';
import './LoginModal.css';
import { Modal, Button } from 'reactstrap';
import Login from '../../containers/Login/Login';

//This the modal that will be visible on the main page for login

const LoginModal = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px'}} onClick={toggle}>&times; </button>;
  return (

    <div className= "button" style={{position: 'absolute', marginLeft: '90%', top: '80px', fontSize: "20px", borderRadius: "12px"}}>
      <Button outline color="danger" onClick={toggle}><span> Login </span></Button>{''}
      <Modal show={show} onHide={handleClose} isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <Login/>
      </Modal>
    </div>
  );
}

export default LoginModal;