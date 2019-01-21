import React from 'react';
import PropTypes from 'prop-types';

const Home = props => {
    const { username } = props;
    return (
        <div>
            <h2> Welcome to CoffeeMeetsCode, { username }</h2>
        </div>
    );
};

export default Home