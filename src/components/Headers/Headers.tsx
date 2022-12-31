import React from 'react'
import { NavLink } from 'react-router-dom'
import './Headers.scss'

type Props = {
  className : string
}

function Headers({className}: Props) {
  return (
    <div className='nav'>
        <div className="logo">
            <a href="#ahh">DosE</a>
        </div>
        <div className="slash"></div>
        <NavLink to='/products' className="home">Products</NavLink>
        <NavLink to='/documents' className="home">Documents</NavLink>
        <NavLink to='/about' className="home">About</NavLink>
    </div>
  )
}

export default Headers