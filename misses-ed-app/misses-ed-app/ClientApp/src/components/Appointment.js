import React, { Component } from 'react';

export class Appointment extends Component {
  static displayName = Appointment.name;

  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      loading: true,
      newAppointment: {
        edName: '',
        time: '',
      },
      appointmentCreated: false,
      eds: [],
    };
  }

  componentDidMount() {
    this.populateEDData();
  }

  async populateEDData() {
    const response = await fetch('eds');
    const data = await response.json();
    this.setState({ eds: data, loading: false });
  }

  static renderAppointmentsTable(appointments) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>ED NAME</th>
            <th>User ID</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment =>
            <tr key={appointment.appointmentId}>
              <td>{appointment.appointmentId}</td>
              <td>{appointment.edName}</td>
              <td>{appointment.userId}</td>
              <td>{appointment.time}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  renderAppointmentForm() {
    if (this.state.appointmentCreated) {
      return (
        <div className="confirmation-message">
          <p>Appointment successfully created!</p>
          <p>Appointment for ED: {this.state.newAppointment.edName || 'Unknown ED'}</p>
          <p>User ID: {this.state.newAppointment.userId}</p>
          <p>Appointment Time: {this.state.newAppointment.time}</p>
        </div>
      );
    }

    return (
      <form onSubmit={this.handleCreateAppointment} className="appointment-form">
        <div className="form-group mb-4">
          <label htmlFor="edName">Select ED:</label>
          <select
            id="edName"
            name="edName"
            value={this.state.newAppointment.edName}
            onChange={this.handleInputChange}
            className="form-control"
          >
            <option value="" disabled>Select ED</option>
            {this.state.eds.map(ed => (
              <option key={ed.id} value={ed.name}>
                {ed.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-4 col-2">
          <label htmlFor="time">Appointment Date:</label>
          <input
            type="datetime-local"
            id="time"
            name="time"
            value={this.state.newAppointment.time}
            onChange={this.handleInputChange}
            className='p-1 rounded'
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Appointment
        </button>
      </form>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      <>
        <h1 id="tableLabel">Book an appointment</h1>
        {Appointment.renderAppointmentsTable(this.state.appointments)}
        {this.renderAppointmentForm()}
      </>
    );

    return <div>{contents}</div>;
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newAppointment: {
        ...prevState.newAppointment,
        [name]: value,
      },
    }));
  };

  handleCreateAppointment = (event) => {
    event.preventDefault();

    const newAppointment = {
      appointmentId: this.state.appointments.length + 1,
      userId: Math.floor(Math.random() * 500) + 1,
      ...this.state.newAppointment,
    };

    this.setState((prevState) => ({
      appointments: [...prevState.appointments, newAppointment],
      newAppointment,
      appointmentCreated: true,
    }));
  };

}