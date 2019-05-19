    
import React from 'react';

const Movie = ({ id, titulo, overview, img }) => {
  return (
    <li key={id}>
      <div className='movie-image'>
        <img src={`http://image.tmdb.org/t/p/w500/${img}`}/>
        <div className='movie-content'>
          <h3>{titulo}</h3>
          <p>{overview}</p>
        </div>
      </div>
    </li>
  );
}

export default Movie;