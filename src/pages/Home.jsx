import React from 'react'
import '../style/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {



  return (
    <div className='home'>
      <div className="about">
        <div className="about--container"> <h2>hi my name is abdul</h2>
          <p>a good frontend developer passion & learning</p>
          <div className="about--links">
            <Link to='https://github.com/Mrabdulbtw ' ><div className=' github-icon' ><ion-icon name="logo-github"></ion-icon></div></Link>
          </div>
        </div>
      </div>


      <div className="skil">
        <h1>skils</h1>
        <h3>front end </h3>
        <p className='skil--list'>html,css javascript,domManipulation,json,reactJs,redux</p>
      </div>
    </div>
  )
} 
