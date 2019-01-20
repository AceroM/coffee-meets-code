import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = ({ handleClick, isLoggedIn }) => {
    return (
        <div>
            <h1> CoffeeMeetsCode </h1>
            <nav>
            { isLoggedIn ? (
                <div>
                    <Link to="/">Home</Link>
                    <a href="#" onClick={handleClick}>
                        Logout
                    </a>
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
    return {
        isLoggedIn: !state.user.id
    }
}

NavBar.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};

export default connect(mapState)(NavBar);