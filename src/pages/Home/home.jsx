import React from "react";
import Header from "./header";
import YourStorie from "./yourstories";
import Storie from "./stories";
import details from "../../details/details";
import Post from "./posts";
import Direct from "./chatspage/directmessages";

function Home(){
   return <div className="home-page">
    <div className="home">
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
    </div>
      <Direct/>
  </div>
}

export default Home