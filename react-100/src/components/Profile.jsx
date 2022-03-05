import React from 'react'
import s from '../ui/Profile.module.css'

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
            <div className={s.posts}>
                <div className={s.posts__title}>My posts</div>
                <div className={s.inputForm}>
                    <textarea placeholder="new news" />
                    <button type="button">send</button>
                </div>

                <div className="newpost">
                    <div className={s.newPostItem}>Hey,why nobody love me?</div>
                    <div className={s.newPostItem}>it`s our new program</div>
                </div>
            </div>
        </div>
    </div>
)

export default Profile
