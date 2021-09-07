import React, { useEffect, useState } from "react";
import { PrintUserPost } from "./Posts";
import { UserInfo } from "./User";

export function UserDetails(){

    const [userdetails, setUserPosts] = useState({
        userinfo : [],
        userposts: [],
        userlikedposts: [],
        userdislikedposts: [],

    });
    
    useEffect(() => {
        fetch(`http://localhost:3001/users/1`)
        .then(response => response.json())
        .then(json => setUserPosts({
            userinfo: json,
            userposts: json.posts,
            userlikedposts: json.likes,
            userdislikedposts: json.dislikes}));
    }, []); 

    const { userinfo , userposts,  userlikedposts, userdislikedposts} = userdetails;

    return <div>
                <UserInfo userinfo={userinfo}/>
                <div class ="user-postlist">{userposts.map((post)=> <PrintUserPost post={post}/>)}</div>
                <div class ="user-postlist">{userlikedposts.map((post)=> <PrintUserPost post={post}/>)}</div>
                <div class ="user-postlist">{userdislikedposts.map((post)=> <PrintUserPost post={post}/>)}</div>
        </div>

}

