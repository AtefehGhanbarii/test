import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    console.log(props)
    const redir = () => {
        props.history.push('/')
    }

    return(
        <div>
            <h6>profile</h6>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>take me to profile/posts</Link>

            {/*{redir()}*/}
        </div>
    )
}


export default Profile;