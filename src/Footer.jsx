import React, { useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import Pdetails from "./personaldetails";

const Footer = () => {
  const [inHome, setHome] = useState(true);
  const handleHome = () => {
    setHome(true);
  };

  const homeBtn = inHome ? <HomeIcon fontSize="large" /> : <HomeOutlinedIcon fontSize="large" />;

  const [inReel, setReel] = useState(false);
  const handleReel = () => {
    setReel(true);
  };
  const reelBtn = inReel ? <MovieFilterOutlinedIcon fontSize="large" /> : <MovieCreationOutlinedIcon fontSize="large" />;

  return (
    <footer>
      <div className="Home" onClick={handleHome}>
        {homeBtn}
      </div>
      <div className="search">
        <SearchIcon fontSize="large" />
      </div>
      <div className="reels" onClick={handleReel}>
        {reelBtn}
      </div>
      <div className="profile-set">
        <img src={Pdetails.dp} />
      </div>
    </footer>
  );
}

export default Footer;
