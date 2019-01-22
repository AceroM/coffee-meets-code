import React, { Component } from 'react';
import HackathonsList from '../components/HackathonPage/HackathonsList';

class HackathonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingHackathons: [] // After CDM, will contain array of ALL upcoming hackathon Objects
        }
    }

    fetchHackathonData = (date) => {
        let currYear = date.getYear() + 1900; // getYear in JS returns year counted from 1900 (e.g. 2019 -> 119)
        let currISODate = date.toISOString().substr(0,10); // Cuts ISO date string down to portion we need
        let mlhAPIUrl = 'https://mlh-events.now.sh/na-' + currYear; // Creates mlh url to fetch from with currYear

        fetch(mlhAPIUrl)
            .then(res => res.json())
            .then(hackathons => { // hackathons -> Contains list of all hackathon objects
                console.log(hackathons)
                // upcomingHack -> filters hackathons by future dates ONLY
                var upcomingHack = hackathons.filter(hackathon => hackathon.startDate > currISODate);
                // setting state's upcomingHackathons property to upcomingHack
                this.setState ({ upcomingHackathons: upcomingHack });
            })
            .catch (err => console.error(err))
    }

    componentDidMount() {
        let date = new Date(); // Fetches today's date
        this.fetchHackathonData(date); // Fetching Hackathon data with current date
    }

    render() {
        const { username } = this.props;
        // hackathonsList -> Lists out all data from upcoming Hackathons as HTML
        const hackathonsList = this.state.upcomingHackathons.map(hackathon => {
            return (
                <div>
                    <h1>Name: { hackathon.name }</h1>
                    <a href={ hackathon.url }> { hackathon.url } </a>
                    <p>startDate: { hackathon.startDate }</p>
                    <p>endDate: { hackathon.endDate }</p>
                    <p>Location: { hackathon.location }</p>
                    <p>isHighSchool: { hackathon.isHighSchool.toString() }</p> {/* Need toString for bool */}
                    <h3>Hackathon Image: </h3> 
                        <a href={ hackathon.imageUrl }>
                            <img src={ hackathon.imageUrl }></img>
                        </a>
                </div>
            )
        });

        console.log("Upcoming hackathons: ", this.state.upcomingHackathons)
        return (
            <div>
                Fetching Hackathons...
                <div className="hackathons-container">
                    <h1>Hackathons</h1>
                    <HackathonsList data={this.state.upcomingHackathons} />
                </div>
            </div>
        );
    }
}

export default HackathonPage;