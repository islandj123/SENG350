import React, { Component } from 'react';

export class Appointment extends Component {
  static displayName = Appointment.name;

  constructor(props) {
    super(props);
    this.state = { appointments: [], loading: true };
  }

  componentDidMount() {
    this.populateAppointmentData();
  }

  static renderAppointmentsTable(appointments) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>ED ID</th>
            <th>User ID</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment =>
            <tr key={appointment.appointmentId}>
              <td>{appointment.appointmentId}</td>
              <td>{appointment.edId}</td>
              <td>{appointment.userId}</td>
              <td>{appointment.time}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Appointment.renderAppointmentsTable(this.state.appointments);

    return (
      <div>
        <h1 id="tableLabel">Appointment</h1>
        <p>This component will demonstrate fetching appointment data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateAppointmentData() {
    const response = await fetch('appointments');
    const data = await response.json();
    this.setState({ appointments: data, loading: false });
  }
}
