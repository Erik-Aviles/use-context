import React, { createContext } from 'react';
import { initialMovies } from '../conts/inicialMovie';

const MoviesContext = createContext();

const MovieProvider = ({children}) => {

  const data = { movies: initialMovies}
  return (
    <MoviesContext.Provider value={data}>
      {children}
    </MoviesContext.Provider>
  )
}

export { MoviesContext, MovieProvider };
