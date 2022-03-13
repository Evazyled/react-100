/* eslint-disable react/prop-types */
import React from 'react'
import s from './Post.module.css'

const Post = ({ message, likesCount }) => (
    <div className={s.newPostItem}>
        <img
            src="https://pbs.twimg.com/media/BubTgoLIcAAFNza.png:large"
            alt="been"
        />
        <div> {message}</div>
        <span> {`Likes: ${likesCount}`}</span>
    </div>
)

export default Post
