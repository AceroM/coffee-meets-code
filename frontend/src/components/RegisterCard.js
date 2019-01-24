import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { registerUser } from '../store/user';
import { connect } from 'react-redux';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 1000,
    },
};

class RegisterCard extends React.Component {
    state = {
        user: "",
        password: "",
        name: ""
    }

    render() {
        const { handleLogin, error } = this.props;
        return (
            <div className="card">
            <form onSubmit={handleLogin}>
                <Typography component="p">
                    Please Enter your login credentials.
                </Typography>
                <FormControl>
                    <InputLabel htmlFor="username"> Username </InputLabel>
                    <Input name="username" type="text"/>
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="pass"> Password </InputLabel>
                    <Input name="password" type="text"/>
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="firstName"> First Name </InputLabel>
                    <Input name="firstName" type="text"/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="lastName"> Last Name </InputLabel>
                    <Input name="lastName" type="text"/>
                </FormControl>
                <br/>
                <br/>
                <Button type="submit" size="small">
                    Register
                </Button>
                { error && error.response && <div> {error.response} </div>}
            </form>
            </div>
        );
    }
};

RegisterCard.propTypes = {
    username: PropTypes.string,
    handleLogin: PropTypes.func,
    error: PropTypes.object
}

const mapState = state => {
    return {
        error: state.user.data.error
    }
}

const mapDispatch = dispatch => {
    return {
        handleLogin(e) {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;
            const firstName = e.target.firstName.value;
            const lastName = e.target.lastName.value;
            // dispatch(getUser({isLoggedIn: true, username }));
            dispatch(registerUser(username, password, firstName, lastName));
        }
    }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(RegisterCard));