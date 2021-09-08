import React, { useEffect, useState } from "react";
import { PrintUserPost } from "./Posts";
import { UserInfo } from "./User";

/*export function UserDetails(){

    const [userid, setUserId] = useState(1);
    const [userdetails, setUserPosts] = useState({
        userinfo : [],
        userposts: [],
        userlikedposts: [],
        userdislikedposts: [],

    });
    
    useEffect(() => {
        fetch(`http://localhost:3001/users/${userid}`)
        .then(response => response.json())
        .then(json => setUserPosts({
            userinfo: json,
            userposts: json.posts,
            userlikedposts: json.likes,
            userdislikedposts: json.dislikes}));
    }, [userid]); 

    const { userinfo , userposts,  userlikedposts, userdislikedposts } = userdetails;

    return <div>
                <UserInfo userinfo={userinfo}/>
                <div class ="user-postlist">{userposts.map((post)=> <PrintUserPost post={post}/>)}</div>
                <div class ="user-postlist">{userlikedposts.map((post)=> <PrintUserPost post={post}/>)}</div>
                <div class ="user-postlist">{userdislikedposts.map((post)=> <PrintUserPost post={post}/>)}</div>
                <button onClick = {()=>{setUserId(userid + 1)}}> Next User </button>
        </div>

}*/

export function UserDetails(){

    const [userid, setUserId] = useState(1);
    const [user, setUserDetails] = useState();
    
    useEffect(() => {
        fetch(`http://localhost:3001/users/${userid}`)
        .then(response => response.json())
        .then(json => setUserDetails(json));
    }, [userid]); 

    if(!user){
        return <p>loaading error</p>
    }

    return <div>
                <UserInfo user={user}/>
                <div class ="user-postlist">{user.posts.map((post)=> <PrintUserPost post={post}/>)}</div>
                <div class ="user-postlist">{user.likes.map((post)=> <PrintUserPost post={post}/>)}</div>
                <div class ="user-postlist">{user.dislikes.map((post)=> <PrintUserPost post={post}/>)}</div>
                <button onClick = {()=>{setUserId(userid + 1)}}> Next User </button>
        </div>

}

