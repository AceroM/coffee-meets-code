import React, { Component } from 'react';
import axios from 'axios';
import Cards, { Card } from 'react-swipe-card'

class SwipePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            other_hackers: [],
            other_hackers_user: []
        };
    }
    componentDidMount(){
        axios.get('api/hackers/allExcept/' + this.props.data.username)
            .then(response => {
                let potato = response.data.map(x => x.username);
                this.setState({
                    other_hackers: response,
                    other_hackers_user: potato
                });
                console.log(this.state.other_hackers_user);
            });
    }
    
    render() {
        let lmfao = this.state.other_hackers_user.map(item => 
            <Card >
                <h2>{item}</h2>
            </Card>
        );
        return (
            <div>
                HERE R UR POSSIBLE SWIPEZ <br/>
                <Cards>
                    {lmfao}
                </Cards>
            </div>
        );
    }
}

export default SwipePage;