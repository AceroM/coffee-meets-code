import React, { Component } from 'react';
import { withRouter, Route, Link, Switch } from "react-router-dom";
import RegisterCard from './RegisterCard'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Book from '@material-ui/icons/Book'
import { connect } from 'react-redux'
import '../styles/Login.scss';
import LoginForm from './AuthForm'
import Home from './Home'
import SwipePage from './SwipePage'
import MessagePage from './MessagePage';
import HackathonPage from './HackathonPage'

class Login extends Component {
    render() {
        const { isLoggedIn, username } = this.props;
        return (
            <div className="login-form">
                {/* { JSON.stringify(this.props) } */}
                { isLoggedIn ? (
                    <Switch>
                        <Route 
                            exact path="/" 
                            render={(props) => <Home {...props} username={username}/>} 
                        /> 
                        <Route
                            path="/swipe"
                            render={(props) => <SwipePage {...props} username={username}/>}
                        />
                        <Route
                            path="/messages"
                            render={(props) => <MessagePage {...props} username={username}/>}
                        />
                        <Route
                            path="/hackathons"
                            render={(props) => <HackathonPage {...props} username={username}/>}
                        />
                    </Switch>
                ) : (
                <div>
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
                    <Route exact path="/" component={LoginForm}/>
                    <Route path="/register" component={RegisterCard}/>
                </Switch>
                </div>
                )}
            </div>
        );
    }
}

/**
 * ContaiNER
 */

const mapState = state => {
    console.log(state)
    return {
        isLoggedIn: state.user.data.isLoggedIn,
        username: state.user.data.username
    }
}

export default withRouter(connect(mapState)(Login))