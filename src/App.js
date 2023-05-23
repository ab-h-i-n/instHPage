import React from 'react';
import './App.css';
import Header from './header';
import YourStorie from './yourstories.jsx';
import Storie from './stories';
import Post from './posts';
import details from './details';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='stories'>
        <YourStorie/>
        <Storie/>
      </div>
      <div className='main'>
        {details.map((post, index) => (
          <Post
            key={index}
            dp={post.dp}
            name={post.name}
            img={post.img}
            likes={post.likes}
            Cap = {post.caption}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
