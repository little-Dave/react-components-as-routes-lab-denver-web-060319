import React from 'react';
import { movies } from '../data';

const moviesList = movies.map(movie => 
    <div>
      <h3>{movie.title}</h3>
      <p>Showing at: {movie.time}</p>
      <ul>
        {movie.genres.map(genre =>
          <li>{genre}</li>
        )}
      </ul>
    </div>
  )

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {moviesList}
    </div>
  );
};

export default Movies;
