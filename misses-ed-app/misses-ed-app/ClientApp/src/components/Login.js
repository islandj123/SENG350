import React, { Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;

render() {
    return (
        <a href="/.auth/login/google">Log in with Google</a>
    );
  }
}