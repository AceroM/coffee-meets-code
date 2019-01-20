import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import axios from 'axios';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 1000,
    },
};

class LoginCard extends React.Component {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    /**
     * Sends a post request to login
     * @memberof LoginCard
     */
=======
=======
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
=======
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
    state = {
        username: "",
        password: ""
    }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
=======
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
=======
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
    handleLogin = (e) => {
        axios.post("api/hackers/login", {
            username: this.state.username,
            password: this.state.password
        })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .then(res => {
            console.log("res")
            if (res.status === 201) {
                this.props.isLoggedIn();
            }
        })
=======
        .then(res => console.log(res))
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
=======
        .then(res => console.log(res))
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
=======
        .then(res => console.log(res))
>>>>>>> parent of 7fda2d3... idk how but i got redux to work LOL
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    }

    render() {
        return (
            <div className="card">
                <Typography component="p">
                    Please Enter your login credentials.
                </Typography>
                <FormControl>
                    <InputLabel htmlFor="username"> Username </InputLabel>
                    <Input type="text" name="username" value={this.state.user} onChange={this.handleChange}/>
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="username"> Password </InputLabel>
                    <Input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </FormControl>
                <br/>
                <br/>
                <Button onClick={this.handleLogin} size="small">
                    Login
                </Button>
            </div>
        );
    }
};

export default withStyles(styles)(LoginCard);