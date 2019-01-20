import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Book from '@material-ui/icons/Book'
import Home from './Home';
import '../styles/Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "img98",
            authenticated: false
        }
    }

    isLoggedIn = () => {
        this.setState({
            authenticated: true,
        });
    }

    render() {
        return (
            <form className="login-form">
                <Router>
                    { this.state.authenticated ?
                        <Switch>
                            <Route 
                                exact path="/" 
                                render={(props) => <Home {...props} username={this.state.username}/>}
                            />
                        </Switch>
                        : <div className="router">
                            <h1>Login / Register</h1>
                            <Tabs
                                id="tabs"
                                // value={this.state.value}
                                // onChange={this.handleChange}
                                variant="fullWidth"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab
                                    label="login"
                                    icon={<Book />}
                                    value="login"
                                    component={Link}
                                    to={"/"}
                                />
                                <Tab 
                                    label="register"
                                    icon={<PersonPinIcon />}
                                    value="register"
                                    component={Link}
                                    to={"/register"}
                                />
                            </Tabs>
                            <Switch>
                                <Route 
                                    exact path="/" 
                                    render={(props) => <LoginCard {...props} isLoggedIn={this.isLoggedIn}/>}
                                />
                                <Route path="/register" component={RegisterCard}/>
                            </Switch>
                        </div>
                    }
                    
                </Router>
            </form>
        );
    }
}

export default Login;