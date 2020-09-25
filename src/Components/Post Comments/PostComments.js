import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDecoration from '../CommentDecoration/CommentDecoration';


const PostComments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setComments(data));
    },[])


    return (
        <div>
            {
                comments.map(pd => <CommentDecoration comment={pd}></CommentDecoration> )
            }
        </div>
    );
};

export default PostComments;