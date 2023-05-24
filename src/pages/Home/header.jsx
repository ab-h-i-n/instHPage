import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header(){

var drpdown = document.querySelector('.drpdown');

const [showed , setShowed] = useState(false);
const handleShow = ()=>{
  setShowed(!showed);
}
const show = showed ? 'show' : '';

   return<header>
        <div className='logo' onClick={handleShow}>
          <img className='nameLogo' src={require('./images/insta_name_logo.png')}/>
          <ArrowDropDownIcon/>
        </div>
        <div className={`drpdown ${show}`}>
          <a href="#">
            Following
            <PeopleAltIcon/>
          </a>
          <a href="#">
            Favorites
            <StarBorderIcon/>
          </a>
        </div>
        <div className='icons'>
            <FavoriteBorderIcon/>
            <MarkChatUnreadOutlinedIcon/>
        </div>
</header>
}

export default Header;