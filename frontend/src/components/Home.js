import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgUrl from '../static/tinder.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    render () {
        const username = "Kai - test user";
        var profileImage = new Image(100,200);
        profileImage.src = imgUrl;
        const age = 21;
        const description = `This is my 
                profile's description`;
        //box for hackathon's you're part of
        //teammates (if any)
        //skills (put icon of language next to skill)

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
        return (
            
            <div className="profile">
                <p> Welcome back to CoffeeMeetsCode, { username } </p>
                <h2> My Profile </h2>
                <img src ={imgUrl} width="200" height="200" alt="Profile picture"></img>
                <h3> { username }, { age } </h3>
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

export default Home;