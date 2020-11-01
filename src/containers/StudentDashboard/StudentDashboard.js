import React from 'react';
import './StudentDashboard.css';

import StudentNavBar from '../../components/StudentNavbar/StudentNavBar';
import Footer from '../../components/Footer/Footer';
import AddNote from '../../components/AddNote/AddNote';
import Calendar from '../../components/Calender/Calendar';

const StudentDashboard = (props) => {

    return (
        <div>
         <StudentNavBar/> 
            <br/>
            <div className="functions" style={{marginTop: '-3%', marginRight: '30px'}}> 
                <button className="functionButtons">RESUME BUILDER</button>
                <hr/>
                <button className="functionButtons">VIEW PROGRESS REPORT</button>
                <hr/>
                <button className="functionButtons">VIEW TEST SCHEDULE</button>
                <hr/>
                <button className="functionButtons">VIEW NEW JOB/POSTINGS</button> 
                <hr/>
                <button className="functionButtons">VIEW FEEDBACK</button> 
                <hr/>
            </div>
            <div className="schedule" align="center">
                SCHEDULES <br/>
            </div>
            <div className="notices" align="center">
                    NOTICE 1 <br/>
                    NOTICE 2 <br/>
                    NOTICE 3 <br/>
                    NOTICE 4 <br/>
                    NOTICE 5 <br/>
                    NOTICE 6 <br/>
                    NOTICE 7 <br/>
                    NOTICE 8 <br/>    
            </div>
            <br/>
            <Calendar/>
            <AddNote/>
            <br/><br/> <br/> <br/> <br/>  <br/> <br/> <br/> <br/>
            <Footer/>
        </div>
    );
}

export default StudentDashboard;