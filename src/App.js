import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './Home'
import UserBeg from './Beginner'
import TryBeg from './Beginner'
import TryInt from './Intermediate'
import UserInt from './Intermediate'


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
