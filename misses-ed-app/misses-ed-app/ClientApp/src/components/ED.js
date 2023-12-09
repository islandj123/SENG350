import React, { Component } from 'react';
import Map from './Map.js';
import Hospitals from './Hospitals.js';

export class ED extends Component {
  static displayName = ED.name;

  constructor(props) {
    super(props);
    this.state = { eds: [], loading: true };
  }

  componentDidMount() {
    this.populateEDData();
  }

  async populateEDData() {
    const response = await fetch('eds');
    const data = await response.json();
    this.setState({ eds: data, loading: false });
  }


  static renderEDTable(eds) {
    return (

      <div>
        <div>
          <Map hospitals={Hospitals} location = {{ lat: 48.4284, lng: -123.3656}}/>
        </div>
        
        <table className="table table-striped" aria-labelledby="tableLabel">
          <thead>
            <tr>
              <th>ID</th>
              <th>ADDRESS</th>
              <th>LATITUDE</th>
              <th>LONGITUDE</th>
              <th>CAPACITY</th>
              <th>WAIT</th>
            </tr>
          </thead>
          <tbody>
            {Hospitals.map(ed =>
              <tr key={ed.id}>
                <td>{ed.id}</td>
                <td>{ed.address}</td>
                <td>{ed.latitude}</td>
                <td>{ed.longitude}</td>
                <td>{ed.capacity}</td>
                <td>{ed.wait}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ED.renderEDTable(this.state.eds);

    return (
      <div>
        <h1 id="tableLabel">ED</h1>
        <p>This component will demonstrate fetching ED data from the server.</p>
        {contents}
      </div>
    );
  }
}
