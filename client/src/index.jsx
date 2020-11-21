// Import react since we need to convert the imported App module into a React component
import React from 'react';
// Import react DOM in order to mount our App to the DOM
import ReactDOM from 'react-dom';
// Import the App component which is the top level component of our app
import App from './components/App.jsx';

// Attach App to the DOM, replacing the div with ID app
ReactDOM.render(<App />, document.getElementById('carousel'));
