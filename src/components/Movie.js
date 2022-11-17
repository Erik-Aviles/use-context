import React, { useContext } from 'react'
import { UserContext } from '../constexts/UserContext'

const Movie = ({ movie }) => {

  const { user, toogleFavoriteMovieToUser } = useContext(UserContext)

  const imgStyles = {
    height: '260px',
    objectFit: 'cover'
  }
  const isFavorite = user?.favoriteMovies?.includes(movie.id)

  return (
    <div className='card'>
        <img 
            src={movie.imageUrl}
            alt={movie.title}
            title={movie.title}
            className='car-img-top'
            style={imgStyles}
        />        
        <div className='card-body'>
          <h4>{movie.title}</h4>
          {user && 
            ( <button 
                className={`btn ${isFavorite ? 'btn-success' : 'btn btn-outline-primary'}`}
                onClick={()=>toogleFavoriteMovieToUser(movie.id)}
              >
                Favorito
              </button>
            )}
        </div>
    </div>
  )
}

export default Movie
