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
        const { userName } = this.props;
        return (
            <div>
                Welcome {userName}
            </div>
        );
    }
}

export default Home;