import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          HOME PAGE
          <Link to={'/page2'}>
              <h2> to page 2 </h2>
          </Link>
          <Link to={'/page3'}>
              <h2> to page 3 </h2>
          </Link>
      </div>
    );
  }
}

export default App;
