import React, { Component } from 'react';
import './Calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 
class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date });
 
  render() {
    return (
      <div>
        <Calendar
          className="calendar"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default MyApp;