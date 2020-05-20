import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={style.photo}>
                <img src="https://xo.ua/wp-content/uploads/2017/05/cirali.jpg" alt=" "/>
            </div>
            <div className={style.avatar}>
                <img src="http://i1.avatarko.ru/11/W8365Yv0v6.jpg" alt=" "/>
            </div>
        </div>


    );
}

export default ProfileInfo;
