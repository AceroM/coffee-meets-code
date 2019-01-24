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
        const description = "Web Designer / UI.";
        
        const { username, firstName, lastName, imageUrl, email, hackathons } = this.props;
        
        var hackathonsList = hackathons.map(hackathon => 
            <div className="hackathon">
                { hackathon }, 
            </div>
        );
        console.log(hackathonsList);

        return (
            
            <div className="profile">
                <div class="col">
                    <div class="col-xs-12 col-sm-8">
                        <h4> Welcome back to CoffeeMeetsCode, { firstName } </h4>
                        <p> My Profile </p>
                        <img src ={ imageUrl } width="200" height="200" alt="Profile picture"></img>
                        <h2> { firstName } { lastName } </h2>
                        <p><strong>About: </strong> { description } </p>
                        <p><strong>Hobbies: </strong> Read, out with friends, listen to music, draw and learn new things. </p>
                        <p><strong>Email: </strong> { email } </p>
                        <p><strong>Interested Hackathons: </strong> { hackathonsList } </p>
                        <p><strong>Skills: </strong>
                            <span class="tags">html5</span> 
                            <span class="tags">css3</span>
                            <span class="tags">jquery</span>
                            <span class="tags">bootstrap3</span>
                        </p>
                    </div>
                </div>
                <h1> WORK IN PROGRESS </h1>
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
                        <td>{ hackathonsList }</td>
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
        firstName: state.user.data.firstName,
        lastName: state.user.data.lastName,
        imageUrl: state.user.data.imageUrl,
        email: state.user.data.email,
        hackathons: state.user.data.hackathons,
    }
}
// Home.PropTypes

export default connect(mapState)(Home);