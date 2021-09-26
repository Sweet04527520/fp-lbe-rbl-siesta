import { Typography } from '@material-ui/core'
import React from 'react'

import './Profile.css'

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                {/* <Typography className="name">Final project LBE RPL</Typography> */}
                <Typography className="title">Final project LBE RPL</Typography>
            </div>

            <figure className='profile_image'>
                {/* <img src={require('../81303.jpg')} alt="waipu" height="210px" width="160px"/> */}
                <img src="81303.jpg" alt=""/>
            </figure>

            <div className='profile_information'>
                Insert Timeline
                <br/>
                <button>my button</button>
            </div>
        </div>
    );

};

export default Profile;