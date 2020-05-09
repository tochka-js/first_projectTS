import React from 'react';
import style from './Post.module.css';


const Post = () => {
    return (
        <div className={style.item}>
            <img src="https://img.freepik.com/free-vector/_68946-352.jpg?size=338&ext=jpg" alt=" "/>
            Post1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;
