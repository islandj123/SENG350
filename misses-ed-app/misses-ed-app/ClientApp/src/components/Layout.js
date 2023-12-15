import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer/Footer';

const Layout = ({ children, logOut }) => {


  return (
    <div className="main-page">
      <div>
          <NavMenu logOut={logOut}/>
          <Container tag="main">
              {children}
          </Container>
      </div>

      <Footer />

    </div>
  );
};

export default Layout;
