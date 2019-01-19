import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login'
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
