import React from "react";
import Pdetails from "../../details/personaldetails";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import GridOnIcon from '@mui/icons-material/GridOn';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Profile(){
    return <div className="profile-page">
        <header>
            <div className="left">
                <h1>{Pdetails.name}</h1>
                <ArrowDropDownIcon/>
            </div>
            <div className="right">
                <AddCircleIcon sx={{fontSize : 30}}/>
                <MenuIcon  sx={{fontSize : 33}}/>
            </div>
        </header>
        <div className="prof-info">
            <img src={Pdetails.dp}/>
            <div className="counts">
                <div>{Pdetails.posts}</div>
                <label>Posts</label>
            </div>
            <div className="counts">
                <div>{Pdetails.followers}</div>
                <label>Followers</label>
            </div>
            <div className="counts">
                <div>{Pdetails.following}</div>
                <label>Following</label>
            </div>
        </div>
        <div className="bio">
            <p className="nickname"><b>{Pdetails.nickname}</b></p>
            <div className="bio-det">
                <a href="#" className="hashtags">{Pdetails.hashtags}</a>
                <pre>{Pdetails.bio}</pre>
            </div>
        </div>
        <div className="prof-buttons">
            <button className="editprof">Edit profile</button>
            <button className="shareprof">Share profile</button>
            <button className="addfollowing"><PersonAddIcon/></button>
        </div>
        <div className="highlights">
            <div className="newhigh">
                <div className="addhightlights">+</div>
                <p>New</p>
            </div>
        </div>
    </div>
}

export default Profile;