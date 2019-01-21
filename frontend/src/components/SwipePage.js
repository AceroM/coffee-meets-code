import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardWrapper } from 'react-swipeable-cards';

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
                let temp = response.data.map(x => x.username);
                this.setState({
                    other_hackers: response.data,
                    other_hackers_user: temp
                });
            });
    }
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
    render() {
        let cards = this.state.other_hackers.map(item => {            
            return(
                <Card key={item.username} 
                    data={item} 
                    onSwipeLeft={this.onSwipeLeft.bind(this)}
                    onSwipeRight={this.onSwipeRight.bind(this)}>
                    Name: {item.firstName} {item.lastName}
                </Card>
            );           
        });
        return (
            <div>
                HERE R UR POSSIBLE SWIPEZ <br/>
                <CardWrapper>
                    {cards}
                </CardWrapper>                    
            </div>
        );
    }
}

export default SwipePage;