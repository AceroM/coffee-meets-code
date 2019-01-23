import React from 'react';
import style from './index.module.scss'
import { connect } from 'react-redux';

const placeholder =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

const UserHeader = ({ username, firstName, lastName, imageUrl }) => {
    return (
        <header className={style.component}>
            <img src={imageUrl} alt={username}/>
            <div>
                <h3>{firstName} {lastName}</h3>
                <h5>@{username}</h5>
            </div>
        </header>
    );
};

const mapState = state => {
    return {
        username: state.user.data.username,
        firstName: state.user.data.firstName,
        lastName: state.user.data.lastName,
        imageUrl: state.user.data.imageUrl
    }
}

export default connect(mapState)(UserHeader);