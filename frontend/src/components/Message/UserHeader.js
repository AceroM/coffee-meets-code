import React from 'react';
import style from './index.module.scss'

const placeholder =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

const UserHeader = ({ data = {}}) => {
    return (
        <header className={style.component}>
            <img src={data.imageUrl || placeholder} alt={data.name}/>
            <div>
                <h3>{data.firstName} {data.lastName}</h3>
                <h5>@{data.username}</h5>
            </div>
        </header>
    );
};

export default UserHeader;