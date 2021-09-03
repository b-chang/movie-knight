import React from 'react';
import './poster.styles.scss';

const Card = ({ title, releaseDate, poster }) => {
  const convertDate = new Date(releaseDate).toUTCString().split(' ').slice(1, 4)
    .join(' ');
  return (
    <div className="poster">
      <img className="poster-img" src={poster} alt="poster" />
      <p>{title}</p>
      <p>{convertDate}</p>
    </div>
  );
};

export default Card;