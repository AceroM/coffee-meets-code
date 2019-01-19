import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
    }
    
    render() {
        const { username } = this.props;
        return (
            <div>
                Welcome {username}
            </div>
        );
    }
}

// Home.propTypes = {
// }

export default Home;