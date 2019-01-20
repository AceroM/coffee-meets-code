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

<<<<<<< HEAD
<<<<<<< HEAD
export default connect(mapState)(Home);
=======
export default Home;
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
=======
export default Home;
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
