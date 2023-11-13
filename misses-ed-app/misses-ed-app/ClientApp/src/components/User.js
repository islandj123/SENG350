import React, { Component } from 'react';

export class User extends Component {
  static displayName = User.name;

  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    this.populateUserData();
  }

  static renderUsersTable(users) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : User.renderUsersTable(this.state.users);

    return (
      <div>
        <h1 id="tableLabel">Users</h1>
        <p>This component will demonstrate fetching user data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateUserData() {
    const response = await fetch('users');
    const data = await response.json();
    this.setState({ users: data, loading: false });
  }
}
