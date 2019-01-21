import React, { Component } from 'react';

class MessagePage extends Component {
    render() {
        const { username } = this.props;
        return (
            <div>
                This is the message page { username }
            </div>
        );
    }
}

export default MessagePage;