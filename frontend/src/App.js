import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './store';
import NavBar from './components/NavBar';
import Login from './components/Login'
import './styles/App.scss';
import socketIOClient from 'socket.io-client';

class App extends Component {
  componentDidMount(){
    let hostname = "localhost:5000"; //window.location.hostname; 
    const socket = socketIOClient(hostname);
    socket.emit('user_connect', "Kaizen");
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar/>
            <Login/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
