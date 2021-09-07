
import React, { useEffect, useState } from "react";
import { PrintPost } from "./Posts";

export function PostList(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(json => setPosts(json.results));
    }, []);

    //console.log(posts.length);

    
    return <ol>{
            posts.map((post, index) => {
                return <PrintPost post = {post} />     
            })
        }
    </ol>

}