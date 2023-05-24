import React from 'react';
import './App.css';
import Footer from './Footer';
import Home from './pages/Home/home';
import Profile from './pages/Profile/profile';
import { Route , Routes } from 'react-router-dom';
import Search from './pages/search/search';
import Reels from './pages/reels/Reels';
import Upload from './pages/upload/upload';


function App() {
  return (
    <div className="App noSelect">
      <Routes>
        <Route path='/instHPage' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/reels' element={<Reels/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
