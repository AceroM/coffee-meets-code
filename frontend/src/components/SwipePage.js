import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardWrapper } from 'react-swipeable-cards';
import CardContent from './CardContent';

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
                //Maps data to users
                let temp = response.data.map(x => x.username);
                this.setState({
                    other_hackers: response.data,
                    other_hackers_user: temp
                });
            });
    }
    //The following functions are bound to each card
    onSwipeLeft(data){
        axios.post('api/hackers/swipedLeft', {
            user: this.props.data.username, 
            swipedOn: data.username
        });
    }
    onSwipeRight(data){
        axios.post('api/hackers/swipedRight', {
            user: this.props.data.username, 
            swipedOn: data.username
        });
    }
    getEndCard() {
        return(
          <div>You're out of hackers!</div>
        );
    }
    render() {
        //Convert the hackers data to an array of cards        
        let cards = this.state.other_hackers.map(item => {            
            return(
                <Card key={item.username} 
                    data={item} 
                    onSwipeLeft={this.onSwipeLeft.bind(this)}
                    onSwipeRight={this.onSwipeRight.bind(this)}>
                    <CardContent hacker={item}/>
                </Card>
            );           
        });
        
        return (            
            <div>
                HERE R UR POSSIBLE SWIPEZ <br/>
                <CardWrapper addEndCard={this.getEndCard.bind(this)}>
                    {cards}
                </CardWrapper>                    
            </div>
        );
    }
}

export default SwipePage;