import React from "react";

const Post = () => {
    
    const handleGetPosts = () => {
        console.log("test")
    }
    
    return (
            <div style={{padding:"20px"}}>
                <div>Post</div>
                <button onClick={handleGetPosts}>get</button>
            </div>
            );
}

export default Post;