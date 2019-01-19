import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginRouter from './LoginRouter';
import '../styles/Login.scss';
import InfoProvider, { Consumer }  from './InfoProvider';

class Login extends Component {
    render() {
        return (
            <form className="login-form">
                <InfoProvider>
                    <Consumer>
                        {(context) => (JSON.stringify(context.state))}
                    </Consumer>
                    <h1>Login / Register</h1>
                    <Router>
                        <Consumer>
                            {(context) => (
                                <Switch>
                                    {context.state.authenticated ? 
                                        <p> hello</p>
                                    : <LoginRouter/>
                                    }
                                </Switch>
                            )}
                        </Consumer>
                    </Router>
                </InfoProvider>
            </form>
        );
    }
}

export default Login;