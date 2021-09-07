import React from "react";
import './Posts.css'

export function PrintPost(props){
    return <li class = "post">
        <h2>{props.post.message}</h2>
        <p>
            <span class ="time">Posted by </span>
            {props.post.postedBy.name}   
            <span class ="time">  {props.post.createdAt}  </span>
        </p>
        <img src = {props.post.imageUrl} alt="Loading Error" width ="300"/>{"\n"}
        <div class ="likes-dislikes">
            <img src = "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png" alt = "Likes" width ="20"/>&nbsp; 
            {props.post.likedBy.length} &nbsp;&nbsp;

            <img src = "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-down.png" alt = "Dislikes" width ="20"/>&nbsp;
            {props.post.dislikedBy.length}<br/><br/>
        </div>
    </li>
}