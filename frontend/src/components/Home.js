import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    render () {
        const age = 21;
        const description = `This is my 
                profile's description`;
        /*  --------------THIS IS USING SEMANTIC UI FROM OUR FIRST PROJECT-----------------
            -Can use this to display the "hackathon" and "teammates" and "skills" boxes later-
                <div class="ui vertical stripe quote segment">
                    <div class="ui equal width stackable internally celled grid">
                        <div class="center aligned row">
                            <div class="column">
                                <h3>Hackathons I'm interested in</h3>
                                <p>- Miguel Acero</p>
                            </div>
                            <div class="column">
                                <h3>My Teammates</h3>
                                <p>I GOT NO FRIENDS </p>
                            </div>
                        </div>
                    </div>
                </div>
        */
        // pulling the user information from the store and storing them as variables
        const { username, imageUrl, email } = this.props;
        return (
            <div className="profile">
                <p> Welcome back to CoffeeMeetsCode, { username } </p>
                <h2> My Profile </h2>
                <img src ={imageUrl} width="200" height="200" alt="profile"></img>
                <h3> { username }, { age } </h3>
                <h3> { email } </h3>
                <br></br>
                <p> { description } </p>
                <br></br>
                <table>
                    <tr>
                        <th>Hackathons I'm interested in</th>
                        <th>My Teammates</th>
                    </tr>
                    <tr>
                        <td>HACK HUNTER</td>
                        <td>I GOT NO FRIENDS</td>
                    </tr>
                </table>
            </div>
        );
    };
};

/**
 * Take in the user information from the redux store
 */
const mapState = state => {
    console.log(state)
    return {
        username: state.user.data.username,
        imageUrl: state.user.data.imageUrl,
        email: state.user.data.email,
        hackathons: state.user.data.hackathons,
    }
}
// Home.PropTypes

export default connect(mapState)(Home);