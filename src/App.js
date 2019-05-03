import React, { Component } from 'react';
import './App.css';
import Dad from './family/Dad.js'
import Mum from './family/Dad.js'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path ='/' component={Home} exact></Route>
        <Route path ='/intermediate' component={UserInt} exact></Route>
        <Route path ='/beginner' component={UserBeg} exact></Route>
      </div>
      </Router>
    );
  }
}

export default App;
