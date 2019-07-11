import React, { Component } from 'react';
import './App.css';
import Dad from './family/Dad.js'

class App extends Component {
  render() {
    return (  
      <div className="App">
        <div className="App-header">
          <Dad/>
        </div>
      </div>
    );
  }
}

export default App;
