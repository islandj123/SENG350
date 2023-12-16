import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import accountIcon from '../assets/profile.svg';
import settingsIcon from '../assets/settings.svg';
import logo from '../assets/mrs_ed_logo_only.png';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header className='header'>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" container light>
          <NavbarBrand className='p-0 pe-2' tag={Link} to="/">
            <img className='me-2' src={logo} width="48" alt="Misses ED Logo" />
            MRS ED
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow gap-4">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/virtual-triage">Virtual Triage</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/ed-services">ED Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/appointment-booking">Appointment Booking</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/user-management">User Management</NavLink>
              </NavItem>
              <NavItem>
                   <a onClick={() => this.props.logOut()} className="icon">
                   <img src={accountIcon} width="32" alt="Account Icon" />
                   </a>
              </NavItem>
              <NavItem>
                   <NavLink to="/user-management" className="icon">
                   <img src={settingsIcon} width="32" alt="Account Icon" />
                   </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
        </header>
    );
  }
}
