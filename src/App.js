import React from 'react';
import './App.css';

function App() {
  return (
    <div className="form-container">
      <form>
        <h2>HELLO RAMYA G!</h2>
        <div className="form-group">
          <label htmlFor="firstname">FIRST NAME :</label>
          <input type="text" id="firstname" name="firstname" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">LAST NAME :</label>
          <input type="text" id="lastname" name="lastname" required />
        </div>
        <div className="form-group">
          <label htmlFor="rollno">ROLL NUMBER :</label>
          <input type="text" id="rollno" name="rollno" required />
        </div>
        <div>
        <h2>DEPARTMENT : <select name="dept">
        <option>--</option>
        <option>AIML</option>
        <option>AIDS</option>
        <option>CSE</option>
        <option>IT</option>
        <option>CSBS</option>
        <option>ISE</option>
        <option>CT</option>
        <option>CSD</option>
        </select></h2>
        </div>
        <div className="form-group">
          <label htmlFor="emailid">EMAIL ID:</label>
          <input type="email" id="emailid" name="emailid" required />
        </div>
        <div className="form-group">
          <label htmlFor="semester">SEMESTER :</label>
          <select id="semester" name="semester" required>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD :</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DATE OF BIRTH :</label>
          <input type="date" id="dob" name="dob" required />
        </div>
        <div className="form-group">
          <label htmlFor="course">COURSE :</label>
          <input type="text" id="course" name="course" required />
        </div>
        <div className="form-group">
          <label htmlFor="language">LANGUAGE :</label>
          <input type="text" id="language" name="language" required />
        </div>
        <div className="form-group">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default App;
