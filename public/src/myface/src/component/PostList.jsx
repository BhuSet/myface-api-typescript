
import React, { useEffect, useState } from "react";
import { PrintPost } from "./Posts";

export function PostList(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/posts`)
        .then(response => response.json())
        .then(json => setPosts(json.results));
    }, []);
    
    return <section>
        <h1>Posts</h1>
        <ol>{
            posts.map((post, index) => {
                return <PrintPost post = {post} />     
            })
        }
        </ol>
    </section>

}
