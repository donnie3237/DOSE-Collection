import React from 'react'
import './About.scss'

type Props = { div : any}

function About({div}: Props) {
  return (
    <div className='About'>
        <div className="bgh"></div>
        <div className="moreAbout"></div>
    </div>
  )
}

export default About