import React from 'react';
import { BrowserRouter, Router, Link } from "react-router-dom";

const PostItem = (props) => {
    console.log(props)
    return(
        <div>
            <p>post item</p>
            {props.match.params.id} - {props.match.params.username}
        </div>
    )
}


export default PostItem;