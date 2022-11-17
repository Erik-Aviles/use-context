import React, { createContext, useState } from "react";
import { inicialUser } from "../conts/inicialUser";

//Este es el Context---
const UserContext = createContext();
//-------

//Este es el Provider---
const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState(inicialUser);

  const login = () =>{
    setUser(inicialUser)
  }
  const logout = () =>{
    setUser(null)
  }

  const toogleFavoriteMovieToUser = (moviId) =>{
    const isFavorite = user.favoriteMovies.includes(moviId);
    const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter(favMovId => favMovId !== moviId)
      :[...user.favoriteMovies, moviId]
    
    setUser({
      ...user,
      favoriteMovies
    })
  }

  const data = { user, login, logout, toogleFavoriteMovieToUser}

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };