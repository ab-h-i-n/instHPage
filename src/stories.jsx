import React from 'react';
import details from './details';

function Storie() {
  return (
    <div className='Othstories'>
      {details.map((story, index) => (
        <div className='storie' key={index}>
          <div className="container">
            <img src={story.dp} alt={story.name} />
          </div>
          <p>{story.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Storie;
