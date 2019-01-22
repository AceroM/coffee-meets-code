import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { auth } from '../../../store';

const RoomList = ({ matches = {} }) => (
    <ul className={style.component}>
        <li> {JSON.stringify(matches)} </li>
    {/* {rooms.map(room => {
        return (
            <li onClick={e => actions.joinRoom(room)}>
            </li>
        )
    })} */}
    </ul>
);

RoomList.propTypes = {
    user: PropTypes.string,
    rooms: "",
    messages: "",
    typing: PropTypes.bool
};

/** 
 * Looks inside store for messages  
 */
const mapState = state => {
    return {
        matches: state.user.matches
    }
}

const mapDispatch = dispatch => {
    return {
        handlePopulate(matches) {
            // dispatch(populateMessages, matches)
        }
    }
}

export default connect(mapState, mapDispatch)(RoomList);