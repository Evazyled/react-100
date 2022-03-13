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
            <Post message="Hello world" likesCount={2} />
            <Post message="Hi" likesCount={56} />
            <Post message="What are you doing?" likesCount={33} />
        </div>
    </div>
)

export default MyPosts
