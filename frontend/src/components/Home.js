import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const Home = props => {
    const { username } = props;
    return (
        <div>
            <h2> Welcome to CoffeeMeetsCode, { username }</h2>
        </div>
    );
};

const mapState = state => {
    return {
        username: state.user.name
    }
}

Home.propTypes = {
    username:  PropTypes.string
};

export default connect(mapState)(Home);
