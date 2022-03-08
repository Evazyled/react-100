import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => (
    <div className={s.content}>
        <img
            src="https://farm4.staticflickr.com/3838/14265729530_22a41fa068_c.jpg"
            className={s.content__img}
            alt="content"
        />
        <div className="profile">
            <img
                src="https://pobierak.jeja.pl/avatars/7/6/b/86339_square.jpg"
                className={s.profile__img}
                alt="avatar"
            />
            <div className="description">
                <div>
                    <p>Name</p>
                </div>
            </div>
        </div>
        <MyPosts />
    </div>
)

export default Profile
