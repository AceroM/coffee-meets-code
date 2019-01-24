import React from 'react';
import PropTypes from 'prop-types';
import { logoutUser } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

const NavBar = ({ handleClick, isLoggedIn, username }) => {
    return (
        <div className="header">
            <img id="logo" src={require('../static/bagel.png')} alt=""/>
            {/* <h1> CoffeeMeetsCode </h1> */}
            <nav className="main-nav">
            { isLoggedIn ? (
                <ul className="nav-items">
                    <Link to="/"> Profile </Link>
                    <Link to="/swipe"> Swipe </Link>
                    <Link to="/messages"> Messages </Link>
                    <Link to="/hackathons"> Hackathons </Link>
                    <a href="#" onClick={handleClick}>
                        Logout
                    </a>
                    {/* <p> {username} </p> */}
                </ul>
            ) : (
                <ul className="nav-items">
                    <Link to="/">Login</Link>
                    <Link to="/register">Register</Link>
                </ul>
            )}
            </nav>
        </div>
    );
};

const mapState = state => {
    console.log(state)
    return {
        isLoggedIn: state.user.data.isLoggedIn,
        username: state.user.data.username
    }
}

const mapDispatch = dispatch => {
    return {
        handleClick() {
            dispatch(logoutUser({
                data: {
                    isLoggedIn: false
                }
            }));
        }
    }
}

NavBar.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};

export default connect(mapState, mapDispatch)(NavBar);