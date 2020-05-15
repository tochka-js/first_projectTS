import React from 'react';
import style from './Post.module.css';


export type MessageType = {
    message:string,
    likesCount:number
}


const Post = (props:MessageType) => {
    return (
        <div className={style.item}>
            <img src="https://img.freepik.com/free-vector/_68946-352.jpg?size=338&ext=jpg" alt=" "/>
            {props.message}

            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    );
}

export default Post;
