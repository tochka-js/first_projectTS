import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message="Hello" likesCount={1}/>
                <Post message="my" likesCount={2}/>
                <Post message="name" likesCount={3}/>
                <Post message="is" likesCount={4}/>
                <Post message="Dimych" likesCount={5}/>
            </div>
        </div>


    );
}

export default MyPosts;
