import React, { useContext } from 'react';
import Home from '../Home/home'
import './Main.css';

// import {Row, Col} from 'reactstrap'; 
// import Login from '../Login/Login';
// import Logo from '../../components/Logo/Logo';
// import Footer from '../../components/Footer/Footer';
// import GalleryLogo from '../../components/GalleryLogo/GalleryLogo';
import { Redirect } from 'react-router';
import AuthContext from '../../AuthContext'

const Main = () => {
    
    const {loggedin, userRole} = useContext(AuthContext);
   

    if(userRole==='faculty' && loggedin) {
        return (
        <Redirect to="/facultydashboard" />
        )
    } 
    

    if(userRole==='student' && loggedin) {
        console.log('true');
        return (
        <Redirect to="/studentdashboard" />
        )
    } 

    return (            
            <Home />
        );
        
    
}



export default Main;