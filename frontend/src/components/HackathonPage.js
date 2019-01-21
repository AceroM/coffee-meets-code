import React, { Component } from 'react';

class HackathonPage extends Component {
    render() {
        const { username } = this.props;
        return (
            <div>
                this is a list of hackatohns {username}
            </div>
        );
    }
}

export default HackathonPage;