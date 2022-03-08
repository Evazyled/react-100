import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => (
    <div className={s.myPosts}>
        <div className={s.myPostsTitle}>My posts</div>
        <div className={s.myPostsInputForm}>
            <textarea placeholder="new news" />
            <button type="button">Add post</button>
        </div>

        <div className={s.posts}>
            <Post message="Hello world" />
            <Post message="Hi" />
            <Post message="What are you doing?" />
        </div>
    </div>
)

export default MyPosts
