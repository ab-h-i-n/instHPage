import React, { useEffect, useRef, useState } from "react";
import Pdetails from "../../details/personaldetails";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import GridOnIcon from '@mui/icons-material/GridOn';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Posts from "./posts";
import Reels from "./reels";
import Tags from "./tags";


export default function Profile(){
    const contentsRef = useRef(null);

    const handleButtonClick = (index) => {
        const container = contentsRef.current;
        const scrollAmount = index * window.innerWidth;
        container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
        });
      };



      const [activeIndex, setActiveIndex] = useState(0);

      useEffect(() => {
        const handleScroll = () => {
          const container = contentsRef.current;
          const scrollOffset = container.scrollLeft;
          const currentIndex = Math.floor((scrollOffset + 250) / window.innerWidth);
          const bar = document.querySelector('.bar');
          const marginLeft = scrollOffset * (33.33 / 100);
          bar.style.marginLeft = `${marginLeft}px`;
          setActiveIndex(currentIndex);
        };
    
        const container = contentsRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => {
          container.removeEventListener('scroll', handleScroll);
        };
      }, []);

      
    return (
        <div className="profile-page">
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
        <div className="buttons">
            <div className={`p btn ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleButtonClick(0)}><GridOnIcon /></div>
            <div className={`r btn ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}><MovieCreationOutlinedIcon /></div>
            <div className={`t btn ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}><PersonPinIcon /></div>
        </div>
        <div className="bar"></div>
        <div className="contents ">
            <div className="contents-container" ref={contentsRef}>
                <div className="Posts-container"><Posts/></div>
                <div className="Reels-container"><Reels/></div>
                <div className="Tags-container"><Tags/></div>
            </div>
        </div>
        </div>
    );


}