import React, { Component } from 'react';
import Recruiter from './components/recruiter';
import './common/foundation.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Hi-diddly do, Mark!  This is the starting place for you!</h2>

      <Recruiter />
      </div>
    );
  }
}

export default App;
