import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';


export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            username: true
        };
        this.state.username = "Test User"
    }

    // Component for large buttons
    LargeButton = ({ label, link }) => (
      <NavLink tag={Link} className="btn-large" to={link}>
          {label}
      </NavLink>
  );

  render() {
      return (
          <div className="home">
              <h2 className='mb-4 welcome-message'>Welcome {this.state.username}!</h2>
              <div className='row w-100 gap-4'>
                  <div className='col'>
                      <this.LargeButton link={"/virtual-triage"} label="Virtual Triage" />
                      <p>Click here to start a virtual triage</p>
                  </div>
                  <div className='col'>
                    <this.LargeButton link={"/ed-services"} label="ED Map" />
                      <p>Check wait-times at ED services near you</p>
                  </div>
                  <div className='col'>
                      <this.LargeButton link={"/appointment-booking"} label="Appointments" />
                      <p>Book your appointments here</p>
                  </div>
              </div>
          </div>
      );
  }
}
//   render() {
//     return (
//       <div className="home">
//         <h2 className='mb-4'>Welcome {this.state.username}!</h2>
//         <div className='row w-100 gap-4'>
//           <div className='col'>
//             <this.LargeButton link={"/virtual-triage"} label="Virtual Triage"></this.LargeButton>
//             <p>This is a virtual triage service.</p>
//           </div>
//           <div className='col'>
//           <this.LargeButton link={"/ed-services"} label="ED Map"></this.LargeButton>
//             <p>Find ED services on this map.</p>
//           </div>
//           <div className='col'>
//             <this.LargeButton link={"/appointment-booking"} label="Appointments"></this.LargeButton>
//             <p>Book your appointments here.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
