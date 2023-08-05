import React from 'react';

const MovieListItem = ({ title, poster_path, vote_average }) => {
  return (
    <div>
      {title} <img src={'https://image.tmdb.org/t/p/w1280' + poster_path} alt="" /> {vote_average}
    </div>
  );
};

export default MovieListItem;
