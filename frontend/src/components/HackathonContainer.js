import React from 'react';
import PropTypes from 'prop-types';

const HackathonContainer = props => {
    const { name, imageUrl } = props;
    return (
        <div>
            
        </div>
    );
};

HackathonContainer.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isHighSchool: PropTypes.bool,
};

export default HackathonContainer;