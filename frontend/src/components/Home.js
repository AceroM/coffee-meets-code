import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    render () {
        const age = 21;
        const description = "Web Developer, UI/UX";
        
        const { username, firstName, lastName, imageUrl, email, hackathons } = this.props;
        
        var hackathonsList = hackathons.map(hackathon => 
            <div>
                <span className="hackathon">
                    { hackathon }
                </span> &nbsp;
            </div>
        );

        return (
            <div className="profile">
                <h4> Welcome back to CoffeeMeetsCode, { firstName } </h4>
                <h3> My Profile </h3>
                <br></br>
                <div className="pfp">
                    <img src ={ imageUrl } width="200" height="200" alt="Profile picture"></img>
                </div>
                <h2> { firstName } { lastName } </h2>
                <p><strong>About: </strong> { description } </p>
                <p><strong>Hobbies: </strong> Read, out with friends, listen to music, draw and learn new things. </p>
                <p><strong>Email: </strong> { email } </p>
                <p><strong>Interested Hackathons: </strong> { hackathonsList } </p>
                <p><strong>Skills: </strong>
                    <span class="tags">html5</span> &nbsp;
                    <span class="tags">css3</span> &nbsp;
                    <span class="tags">javascript</span> &nbsp;
                    <span class="tags">jquery</span> &nbsp;
                    <span class="tags">reactJS</span> &nbsp;
                    <span class="tags">express</span> &nbsp;
                </p>
                <br></br>
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
        firstName: state.user.data.firstName,
        lastName: state.user.data.lastName,
        imageUrl: state.user.data.imageUrl,
        email: state.user.data.email,
        hackathons: state.user.data.hackathons,
    }
}

export default connect(mapState)(Home);