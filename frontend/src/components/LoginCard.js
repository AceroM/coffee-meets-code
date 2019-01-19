import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InfoProvider, { Consumer }  from './InfoProvider';

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
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    }

    render() {
        return (
            <div className="card">
                <InfoProvider>
                <Typography component="p">
                    Please Enter your login credentials.
                </Typography>
                <Consumer>
                    {(context) => (
                        <div>
                        <FormControl>
                            <InputLabel htmlFor="username"> Username </InputLabel>
                            <Input type="text" name="username" value={context.state.username} onChange={context.handleChange}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel htmlFor="username"> Password </InputLabel>
                            <Input type="password" name="password" value={context.state.password} onChange={context.handleChange}/>
                        </FormControl>
                        </div>
                    )}
                </Consumer>
                <br/>
                <br/>
                    <Consumer>
                        {(context) => (
                            <Button onClick={context.isLoggedIn} size="small">
                                Login
                            </Button>
                        )}
                    </Consumer>
                </InfoProvider>
            </div>
        );
    }
};

export default withStyles(styles)(LoginCard);