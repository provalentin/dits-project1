import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Home page
          <Link to={'/page3'}>
              To page 3
          </Link>
          <Link to={'/page2'}>
              To page 2
          </Link>
      </div>
    );
  }
}

export default App;
