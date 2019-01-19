import React, { Component, createContext } from 'react';
import axios from 'axios';

const infoContext = createContext();
export const { Consumer } = infoContext;
class InfoProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "img98",
            password: "migueliscool",
            hackathons: ["HackNY", "CunyHackathon"],
            authenticated: false
        }
    }

    render() {
        return (
            <infoContext.Provider value={{
                state: this.state,
                isLoggedIn: () => {
                    this.setState({ authenticated: true })
                },
                handleLogin: () => {
                    axios.post("api/hackers/login", {
                        username: this.state.username,
                        password: this.state.password
                    })
                    .then(res => {
                        if (res.status === 201) {
                            this.setState({authenticated: true})
                            console.log(res)
                            console.log(this.state)
                        }
                    })
                },
                handleChange: (e) => {
                    this.setState({[e.target.name]: e.target.value});
                    console.log(this.state)
                }
            }}>
            {this.props.children}
            </infoContext.Provider>
        )
    }
}

export default InfoProvider;