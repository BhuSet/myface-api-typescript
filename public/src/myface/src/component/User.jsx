import React from 'react';

export function UserInfo({ userinfo }) {
    return(
        <div>
        <h2>{userinfo.name}</h2>
        <img src={userinfo.coverImageUrl} alt="cover"/>
        <img src={userinfo.profileImageUrl} alt="profile"/>
        <p>{userinfo.username}</p>
        <p>{userinfo.email}</p>
    </div>
    )
}