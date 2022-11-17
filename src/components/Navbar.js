import React, { useContext } from 'react'
import { UserContext } from '../constexts/UserContext';

const Navbar = () => {

  const { user, login, logout }= useContext(UserContext)
  return (
    <nav className='navbar navbar-dark bg-dark mb-4'>
      <div className='container'>
        <span className='navbar-brand'>
          <h2>{user ? `Hola, ${user.name} ${user.apellido}` : 'Bienvenid@'}</h2>
        </span>
        { user 
          ? <button 
              onClick={logout}
              className='btn btn-primary'>Cerrar Sesion</button> 
          : <button
              onClick={login}
              className='btn btn-primary'>Iniciar Sesion</button> 
        }
      </div>
    </nav>
  )
}

export default Navbar;
    