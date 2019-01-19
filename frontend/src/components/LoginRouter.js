import React from 'react';
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Book from '@material-ui/icons/Book'
import { Route, Link, Switch } from 'react-router-dom';

const LoginRouter = () => {
    return (
        <div className="router">
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
                <Route exact path="/" component={LoginCard}/>
                <Route path="/register" component={RegisterCard}/>
            </Switch>
        </div> 
    );
};

export default LoginRouter;