import React, { useContext } from 'react';
import Home from '../Home/home'
import './Main.css';
import { Redirect } from 'react-router';
import AuthContext from '../../AuthContext'

const Main = () => {
    
    const {loggedin, userRole} = useContext(AuthContext);

    if(userRole==='faculty' && loggedin) {
        return (
            <Redirect to="/facultydashboard" />
        );
    } 
    

    if(userRole==='student' && loggedin) {
        console.log('true');
        return (
            <Redirect to="/studentdashboard" />
        );
    } 

    return (            
        <Home />
    );  
}

export default Main;