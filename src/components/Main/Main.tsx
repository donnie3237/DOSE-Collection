import React from 'react'
import './main.scss'
const Ground = require('./img/Ground.png')
const MarsMt = require('./img/mars-mt.png')

type Props = {}

function Main({}: Props) {
  return (
    <div className='MainPage'>
      <div className="Head-main">
        <h3>Hello!!</h3>
        <div className="sun"></div>
      </div>
      <div className="div2">
        <img src={Ground}/>
      </div>
      <div className="Head-main2">
        <h3>We are there!!</h3>
    </div>
    <div className="div3">
      <img src={MarsMt}/>
    </div>
    <div className="MarsMiss">

    </div>
    </div>
    
  )
}

export default Main