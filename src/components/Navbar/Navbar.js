import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Link className='navbar' to={'/'}>
        Déconnexion
    </Link>
  )
}

export default Navbar