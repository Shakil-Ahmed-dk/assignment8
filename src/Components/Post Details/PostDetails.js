import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComments from '../Post Comments/PostComments';


const PostDetails = (props) => {
    const {postId} = useParams();

    const friendStyle={
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }


    const [post, setPost] = useState({});
    const {id,title,body} = post;
    
    useEffect(() => {
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setPost(data));
    },[])

    return (
                <div style={friendStyle}>
                    <h1>Post ID: {id}</h1>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <h5>Comments:</h5>
                    <PostComments></PostComments>
                </div>
    );
};

export default PostDetails;