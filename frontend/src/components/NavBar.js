import React from 'react';
import PropTypes from 'prop-types';
import { logoutUser } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

const NavBar = ({ handleClick, isLoggedIn, username }) => {
    return (
        <div>
            <h1> CoffeeMeetsCode </h1>
            <nav>
            { isLoggedIn ? (
                <div>
                    <Link to="/"> Home </Link>
                    <Link to="/swipe"> Swipe </Link>
                    <a href="#" onClick={handleClick}>
                        Logout
                    </a>
                    <p> {username} </p>
                </div>
            ) : (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            )}
            </nav>
            <hr/>
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
            dispatch(logoutUser({ isLoggedIn: false }));
        }
    }
}

NavBar.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};

export default connect(mapState, mapDispatch)(NavBar);