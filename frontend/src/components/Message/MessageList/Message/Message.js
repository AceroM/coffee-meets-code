import React from 'react';
import style from './index.module.scss';

const time = string => {
    const date = new Date(string)
    const minutes = date.getMinutes()
    return `${date.getHours()}:${minutes < 10 ? '0' + minutes : minutes}`
}

const Message = ({ name, imageUrl, message }) => {
    return (
        <li className={style.component}>
            <img
                src={imageUrl}
                alt={name}
            />
            <span>
                {`${name} | ${time(new Date())}`}
            </span>
            <p> {message} </p>
        </li>
    );
};

export default Message;