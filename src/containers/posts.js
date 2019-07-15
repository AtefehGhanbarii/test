import React from 'react';
import { BrowserRouter, Router, Link } from "react-router-dom";

const Posts = () => {
    return (
        <div>
            <Link to="/posts/1/lklfk"> post 1</Link><br />
            <Link to="/posts/2">post 2</Link><br />
            <Link to="/posts/3">post 3</Link><br />
        </div>
    )
}


export default Posts;