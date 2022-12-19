import React from 'react'
import { NavLink } from 'react-router-dom'
import './Headers.scss'
const LogoImg = require('./img/profile.jpg')

type Props = {}

function Headers({}: Props) {
  return (
    <div className='nav'>
        <div className="logo">
            <a href="#">DosE</a>
        </div>
        <div className="slash"></div>
        <NavLink to='/products' className="home">Products</NavLink>
        <NavLink to='/documents' className="home">Documents</NavLink>
        <NavLink to='/about' className="home">About</NavLink>
    </div>
  )
}

export default Headers