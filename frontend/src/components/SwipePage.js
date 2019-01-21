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
    getEndCard() {
        return(
          <div>You're out of hackers!</div>
        );
      }
    render() {
        const wrapperStyle = {
            backgroundColor: "#024773",
            height: "600px",
            width: "600px"
        }
        const cardStyle = {
            height: "300px",
            width: "300px"
        }
        let cards = this.state.other_hackers.map(item => {            
            return(
                <Card key={item.username} 
                    data={item} 
                    onSwipeLeft={this.onSwipeLeft.bind(this)}
                    onSwipeRight={this.onSwipeRight.bind(this)}
                    style={cardStyle}>
                    Name: {item.firstName} {item.lastName}
                </Card>
            );           
        });
        
        return (            
            <div>
                HERE R UR POSSIBLE SWIPEZ <br/>
                <CardWrapper style={wrapperStyle}
                    addEndCard={this.getEndCard.bind(this)}>
                    {cards}
                </CardWrapper>                    
            </div>
        );
    }
}

export default SwipePage;