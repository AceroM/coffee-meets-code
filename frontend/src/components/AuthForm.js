import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { auth } from '../store'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 1000,
    },
};

class AuthForm extends React.Component {
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
                        <Input type="text" name="username"/>
                    </FormControl>
                    <br/>
                    <FormControl>
                        <InputLabel htmlFor="username"> Password </InputLabel>
                        <Input type="password" name="password"/>
                    </FormControl>
                    <br/>
                    <br/>
                    <Button type="submit" size="small">
                        Login
                    </Button>
                    { error && error.response && <div> {error.response} </div>}
                </form>
            </div>
        );
    }
};

AuthForm.propTypes = {
    username: PropTypes.string,
    handleLogin: PropTypes.func,
    error: PropTypes.string
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
            dispatch(auth(username, password));
        }
    }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(AuthForm));