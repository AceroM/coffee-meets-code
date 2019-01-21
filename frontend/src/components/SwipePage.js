import React, { Component } from 'react';
import axios from 'axios';

class SwipePage extends Component {
    render() {
        console.log(this.props.data.firstName);
        axios.get('api/hackers/allExcept/' + this.props.data.username)
            .then(response => {
                let potato = response.data.map(x => x.username);
                console.log(potato);
                return (
                    <div>
                        HERE R UR POSSIBLE SWIPEZ <br/>
                        {potato[0]}
                    </div>
                );
            });
        return (
            <div>
                HERE R UR POSSIBLE SWIPEZ
            </div>
        );
    }
}

export default SwipePage;