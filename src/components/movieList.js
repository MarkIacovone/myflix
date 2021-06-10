import React from 'react';

const movieList = (props) => {
  const { movies } = props;
  if (!movies || movies.length === 0) return <p>No movies, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Movies</h2>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className='list'>
            <span className='movie-text'>{movie.name} </span>
            <span className='movie-description'>{movie.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default movieList;