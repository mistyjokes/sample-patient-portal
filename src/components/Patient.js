import React, { Component } from 'react';
import Table from './Table';
import Appointment from './Appointment';
import Header from "./Header";
import VerticalNav from "./VertcialNav";


class Patient extends Component {
    constructor(props){
        super(props)
        this.state = {
            appointments: []
        };  
    }

    

    handleSubmit = appt => {
        this.setState((state) => ({
            appointments: state.appointments.concat(appt)
        }));
    }
    

    render() {

        const appoint = this.state.appointments;

        return (
            <div>
                <Header />
                <VerticalNav />
           
            
                <div className="container">
                    <h1 style={{color:'white', textDecoration: 'underline white', paddingLeft:130}}>Your Appointments</h1>
                
                    <Table apptData = {appoint}/>
                    
                    <br/>
                        <h3 style={{color:'white', textDecoration: 'underline white', paddingLeft:130 }}>Set Up An Appointment</h3>
                        <Appointment handleSubmit = {this.handleSubmit}/>
                    <br/>

                </div>
            </div>
        );
    }
}

export default Patient;