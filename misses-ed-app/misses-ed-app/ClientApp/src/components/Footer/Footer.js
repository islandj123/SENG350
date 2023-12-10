import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './Footer.css';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer className="border-top">
                <Container>
                    SENG 350 Project Group 6 - 2023
                </Container>
            </footer>
        );
    }
}
