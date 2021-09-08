import React, { useState } from "react";
import moment from "moment";
import './Posts.scss'

export function PrintPost(props){
    const [likes, setLikes] = useState(props.post.likedBy.length);
    const [dislikes, setDislikes] = useState(props.post.dislikedBy.length);

    return <li class = "post">
        <h2>{props.post.message}</h2>
        <p>
            <span class ="small-font">Posted by </span>
            {props.post.postedBy.name}   
            <span class ="small-font">  {props.post.createdAt}  </span>
        </p>
        <img src = {props.post.imageUrl} alt="Loading Error"/>{"\n"}
        <div class ="likes-dislikes">
            <button onClick = {()=>{setLikes(likes + 1)}}> 👍 </button> &nbsp; 
            {likes} &nbsp;&nbsp;

            <button onClick = {()=>{setDislikes(dislikes + 1)}}> 👎 </button> &nbsp;
            {dislikes}
        </div>
    </li>
}


export function PrintUserPost(props){

    return <li class = "user-post">
                <img src = {props.post.imageUrl} alt={props.post.message}/>
                <p >{props.post.id}</p>
                <p >{moment(props.post.createdAt).format('DD/MM/YYYY')}</p>
                <p >{props.post.message}</p>      
            </li>
        
}
