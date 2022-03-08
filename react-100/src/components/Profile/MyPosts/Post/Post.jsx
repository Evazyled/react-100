import React from 'react'
import s from './Post.module.css'

const Post = ({ message }) => (
    <div className={s.newPostItem}>
        <img
            src="https://pbs.twimg.com/media/BubTgoLIcAAFNza.png:large"
            alt="been"
        />
        <div>{message}</div>
        <span>Count like</span>
    </div>
)

export default Post
