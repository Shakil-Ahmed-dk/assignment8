import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [post,setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    
    return (
        <div>
            {
                post.map(pd => <Posts post={pd}></Posts>)
            }
        </div>
    );
};

export default Home;