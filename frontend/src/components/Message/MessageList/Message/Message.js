import React from 'react';
import style from './index.module.scss';

const time = string => {
    const date = new Date(string)
    const minutes = date.getMinutes()
    return `${date.getHours()}:${minutes < 10 ? '0' + minutes : minutes}`
}

const Message = () => {
    return (
        <li className={style.component}>
            
        </li>
    );
};

export default Message;