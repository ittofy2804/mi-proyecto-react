import React, { useState } from 'react';
import './Card.css';

export function Card({ title, imageUrl, buttonText }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      
      <div className="card-image-wrapper">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>

      <button className="card-button" onClick={() => setLikes(likes + 1)}>
        {buttonText} {likes > 0 && `(${likes})`}
      </button>
    </div>
  );
}