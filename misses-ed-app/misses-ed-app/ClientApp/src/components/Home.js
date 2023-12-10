import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            username: true
        };
        this.state.username = "Test User"
    }

    // component for large buttons
    LargeButton = ({ label, link }) => (
        <NavLink tag={Link} className="text-dark btn-large" to={link}>{label}</NavLink>
    );

  render() {
    return (
      <div className="home">
        <h2 className='mb-4'>Welcome {this.state.username}</h2>
        <div className='row w-100 gap-4'>
          <div className='col'>
            <this.LargeButton link={"/user-management"} label="Virtual Triage"></this.LargeButton>
          </div>
          <div className='col'>
            <this.LargeButton link={"/appointment-booking"} label="Appointments"></this.LargeButton>
          </div>
          <div className='col'>
            <this.LargeButton link={"/ed-services"} label="ED Map"></this.LargeButton>
          </div>
        </div>
      </div>
    );
  }
}
