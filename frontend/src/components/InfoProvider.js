import React, { Component, createContext } from 'react';

const infoContext = createContext();
export const { Consumer } = infoContext;
class InfoProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "img98",
            hackathons: ["HackNY", "CunyHackathon"],
            authenticated: false
        }
    }

    render() {
        return (
            <infoContext.Provider value={{
                state: this.state,
                isLoggedIn: () => this.setState({ authenticated: true })
            }}>
                {this.props.children}
            </infoContext.Provider>
        )
    }
}

export default InfoProvider;