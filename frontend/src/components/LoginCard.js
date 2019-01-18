import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 1000,
    },
};

class LoginCard extends React.Component {
    state = {
        user: "",
        password: ""
    }

    render() {
        return (
            <div className="card">
                <Typography component="p">
                    Please Enter your login credentials.
                </Typography>
                <FormControl>
                    <InputLabel htmlFor="username"> Username </InputLabel>
                    <Input id="username" value={this.state.user}/>
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="username"> Password </InputLabel>
                    <Input id="username" value={this.state.password}/>
                </FormControl>
                <br/>
                <br/>
                <Button size="small">
                    Login
                </Button>
            </div>
        );
    }
};

export default withStyles(styles)(LoginCard);