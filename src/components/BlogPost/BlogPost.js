import React from 'react';
import './BlogPost.css'
const BlogPost = (props) => {
    console.log(props.post);
    const {userId,title,body}=props.post
    return (
        <div className="post">
            <p>{userId}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default BlogPost;