import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import { changeTalkingto } from '../../../store'
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import { changeConvo } from '../../../store';

class RoomList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: {}
        }
    }
    
    componentDidMount() {
        const { username, isLoggedIn, firstName, matches, loadChat } = this.props
        axios.get(`/api/hackers/matched/${username}`)
        .then(res => {
            let data = res.data;
            console.log(data)
            let hostname = "http://localhost:5000/"; //window.location.hostname; 
            console.log(hostname)
            if (isLoggedIn) {
                const socket = socketIOClient(hostname);
                socket.emit('user_connect', firstName.toLowerCase()); 
            }
            if (data.length > 0) {
                data.forEach(name => {
                    let n = name.username;
                    matches[n] = [{name: n, message: "Hi", imageUrl: name.imageUrl}]
                })
                console.log(matches)
                this.setState({ matches })
                loadChat(matches)
            } else {
                this.setState({ lonely: true })
            }
        })
    }
    render() {
        const { handleClick } = this.props;
        return (
            <ul className={style.component}>
                {/* <li> {JSON.stringify(this.state.matches)} </li> */}
                { Object.keys(this.state.matches).length === 0 ? (
                    <li> You got matched with nobody. YIKES </li>
                ) : (
                    Object.entries(this.state.matches).map(name => (
                        <li
                            onClick={e => handleClick(name[0])}
                        > {name[0]} 
                            <col->
                                <span>{name[1][0].message}</span>
                            </col->
                        </li>
                    ))
                )}
            </ul>
        )
    }
}

/** 
 * Looks inside store for messages  
 */
const mapState = state => {
    console.log(state.user.data.matches)
    return {
        username: state.user.data.username,
        matches: state.user.data.matches,
        matched: state.user.data.matched,
        talkingTo: state.user.data.talkingTo
    }
}

const mapDispatch = dispatch => {
    return {
        loadChat(matches) {
            dispatch(changeConvo(matches))
        },
        handleClick(name) {
            dispatch(changeTalkingto(name))
        },
        handleTalking(name) {
            dispatch(changeTalkingto(name))
        },
    }
}

export default connect(mapState, mapDispatch)(RoomList);