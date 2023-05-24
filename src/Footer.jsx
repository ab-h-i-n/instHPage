import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import Pdetails from "./details/personaldetails";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link , useResolvedPath , useMatch } from "react-router-dom";

const Footer = () => {
  
  return (
    <footer>
      <CustomLink to="/instHPage">
        <HomeIcon/>
      </CustomLink>
      <CustomLink to="/search">
        <SearchIcon />
      </CustomLink>
      <CustomLink to="/upload" >
        <AddCircleIcon/>
      </CustomLink>
      <CustomLink to="/reels">
        <MovieCreationOutlinedIcon/>
      </CustomLink>
      <CustomLink className="profile-set" to="/profile">
        <img src={Pdetails.dp} />
      </CustomLink>
    </footer>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const path = resolvedPath.pathname.toString();
  const isActive = useMatch({ path, end: true });

  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}


export default Footer;
