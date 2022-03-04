import React from 'react'

const Profile = () => (
    <div className="content">
        <img
            src="https://farm4.staticflickr.com/3838/14265729530_22a41fa068_c.jpg"
            className="content-img"
            alt="content"
        />
        <div className="profile">
            <img
                src="https://pobierak.jeja.pl/avatars/7/6/b/86339_square.jpg"
                className="profile-img"
                alt="avatar"
            />
            <div className="description">
                <div>
                    <p>Name</p>
                </div>
            </div>
            <div className="posts">
                <div className="posts__title">My posts</div>
                <div className="input-form">
                    <textarea placeholder="new news" />
                    <button type="button">send</button>
                </div>

                <div className="newposts">
                    <div className="newpost">Hey,why nobody love me?</div>
                    <div className="newpost">it`s our new program</div>
                </div>
            </div>
        </div>
    </div>
)

export default Profile
