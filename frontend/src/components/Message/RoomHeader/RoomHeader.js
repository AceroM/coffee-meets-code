import React from 'react';
import style from './index.module.scss'

const RoomHeader = ({ roomName }) => {
    return (
        <header className={style.component}>
            <h1> {roomName} </h1>
        </header>
    );
};

export default RoomHeader;