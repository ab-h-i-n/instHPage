import React from "react";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { red } from "@mui/material/colors";


function Post({dp,name,img,likes,Cap}){

    const [liked, setLiked] = useState(false);
    const handleLike = () => {
      setLiked(!liked);
    };
    const likeIcon = liked ? <FavoriteIcon style={{ color: red[500] }}/> : <FavoriteBorderIcon />;
  

    const [saved , setSaved] = useState(false);
    const handleSave = ()=>{
        setSaved(!saved);
    }
    const saveIcon = saved ? <BookmarkIcon/> : <BookmarkBorderIcon/>;

return         <div className="post">
            <div className="post-header">
                <div className="profile">
                    <img src={dp}/>
                    <h1>{name}</h1>
                </div>
                <MoreVertIcon/>
            </div>
            <img className="pic" src={img}/>
            <div className="buttons">
                <div className="left">
                    <div className="like" onClick={handleLike}>
                        {likeIcon}
                    </div>
                    <ChatBubbleOutlineIcon/>
                    <SendIcon/>
                </div>
                <div className="right">
                    <div className="save" onClick={handleSave}>
                        {saveIcon}
                    </div>
                </div>
            </div>
            <div className="desc">
                <p className="likes"><b>{`${likes} likes`}</b></p>
                <p className="caption">{`${name} ${Cap}`}</p>
            </div>
            </div>
}

export default Post;