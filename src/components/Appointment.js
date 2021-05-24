import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../Appointment.css";



class Appointment extends Component{
  constructor(props) {
    super(props);

    this.state = {
        Name: "",
        date: new Date(),
        option: "Yes",
        Department: [{name: "Pediatrics", Doctor: ["Geri O'Leary", "Khalil Bailey", "Laura Bellini", "Yohan Campito", "Alyssa Chan"]},
          {name: "Maternity", Doctor: ["Ranen Carter", "James Chu", "Kristina Cooper", "Michael Dore"]},
          {name: "Geriatrics", Doctor: ["Sarah Eaton", "Paul Giampa", "Jill Gupta"]},
          {name: "Psychiatrics", Doctor: ["Mohammed Gupta", "Alexia Hirt", "Patricia Ivey", "Jacob Jones", "Ronny Capelli", "Zach Blanco"]},
          {name: "Dermatology", Doctor: ["Elena Kunz", "Lenonard Lu", "Craig Matthews"]}],
        defaultDept: "--Choose Department--",
        Doctor: [],
        defaultDoc: "--Choose Doctor--"
    };

   
    
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleVisitChange = this.handleVisitChange.bind(this);
    this.handleDeptChange = this.handleDeptChange.bind(this);
    this.handleDocChange = this.handleDocChange.bind(this);
  }

  

  handleNameChange = event => {
    this.setState({ 
        Name: event.target.value
        });  
  }

  handleDateChange (date) {
    this.setState({
      date: date
    });
  }

  handleVisitChange = event => {
    this.setState({
      option: event.target.value
    });
  }

  handleDeptChange = event => {
    this.setState({defaultDept: event.target.value});
    this.setState({Doctor: this.state.Department.find(dept => dept.name === event.target.value).Doctor})
  }

  handleDocChange = event => {
    this.setState({defaultDoc: event.target.value});
  }



  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();
    this.props.handleSubmit(this.state);
    

    this.setState({  
        Name: "",
        date: new Date(),
        option: "Yes",
        Department: [{name: "Pediatrics", Doctor: ["Geri O'Leary", "Khalil Bailey", "Laura Bellini", "Yohan Campito", "Alyssa Chan"]},
          {name: "Maternity", Doctor: ["Ranen Carter", "James Chu", "Kristina Cooper", "Michael Dore"]},
          {name: "Geriatrics", Doctor: ["Sarah Eaton", "Paul Giampa", "Jill Gupta"]},
          {name: "Psychiatrics", Doctor: ["Mohammed Gupta", "Alexia Hirt", "Patricia Ivey", "Jacob Jones", "Ronny Capelli", "Zach Blanco"]},
          {name: "Dermatology", Doctor: ["Elena Kunz", "Lenonard Lu", "Craig Matthews"]}],
        defaultDept: "--Choose Department--",
        Doctor: [],
        defaultDoc: "--Choose Doctor--"
    });
  }


  render(){
    

    return(
      <form className="form-container" onSubmit = {this.onFormSubmit}>
        <div>
          <nav>
            <p> 
              <label>Name:</label>
              <input type="text" onChange= {this.handleNameChange} value={this.state.Name} ></input>
            </p>
          </nav>
        </div>

        <br/> <br/>
        

        <div>
          <strong>Department and Doctor</strong>
        </div>
          <div>
            <nav>
              <p>
                <label>Department:</label>
                <select placeholder="Department" value={this.state.defaultDept} onChange={this.handleDeptChange}>
                  <option>--Choose Department--</option>
                  {this.state.Department.map((e,key) => {return <option key = {key}>{e.name}</option>})}
                </select>
              </p>
            </nav>
          </div>

          <div>
            <nav>
              <p>
                <label>Doctor:</label>
                <select placeholder="Doctor" value={this.state.defaultDoc} onChange={this.handleDocChange}>
                  <option>--Choose Doctor--</option>
                  {this.state.Doctor.map((e,key) => {return <option key = {key} >{e}</option>})}
                </select>
              </p>
            </nav>
            
          </div>

          <br/> <br/>

          <div>
            <strong>Appointment Date and Time</strong>
            <p style={{fontFamily:"'Courier New', Courier, monospace",color:"gray"}}>
              Click the textbox to set a date and time!
            </p>
          </div>
        
          

        <div>
          <label>Appointment: </label>
          <div className="calendar-position">
            <DatePicker 
              selected={this.state.date}
              onChange={this.handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              
              
            />
          </div>
        </div>

        <br/> <br/>

        <div>
          <strong>First Time Visit?</strong>
            <nav>
                <input type="radio" value= "Yes" checked={this.state.option === "Yes"} onChange={this.handleVisitChange}/>Yes
                <input type="radio" value= "No" checked={this.state.option === "No"} onChange={this.handleVisitChange}/>No
            </nav>
        </div>

        <br/> <br/>

        <button onClick = {this.onFormSubmit}>Submit</button>

      </form>

    )
  }

}
export default Appointment; 