import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Define the baseurl as the correct type
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
// Define the rootElement as the correct type
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <GoogleOAuthProvider clientId='430178066820-5saioqvk0cm6j0mavqh1mmdgrnahvced.apps.googleusercontent.com'>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
