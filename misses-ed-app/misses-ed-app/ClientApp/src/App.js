import React, { Component, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import './custom.css';
import './login.css';
import { Login } from './components/Login';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function App() {
  const [ authenticated, setAuthenticated] = useState(false);
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
        console.log(user);
          if (user.access_token) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                      console.log(res.data);
                      setAuthenticated(true);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setProfile(null);
      setAuthenticated(false);
  };


  if(authenticated) {
  return (
    <Layout logOut={logOut}>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
  );
  } else {
    return(
    <div className='floating-wrapper'>
      <h1>Misses ED</h1>
      <h3 className='mb-5'>SENG 350 - Group 6</h3>
      <h6 className='mb-4'>Sign in to continue with all features</h6>
      <button className='mb-4 button nice-button' onClick={() => login()}>
        <div className='inset nice-button-active lead'>
          Sign in with Google
        </div>
      </button>
      <h6 className='mb-4 text-center'>Or</h6>
      {/* FYI this will be changed in the future to set a flag indicating whether user is a guest */}
      <button className='button lead' onClick={() => setAuthenticated(true)}>Continue as Guest</button>
      <p className='bottom'>©2023</p>
    </div>
    );
  }
  
}

export default App;
