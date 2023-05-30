import React from 'react'
import '../style/Home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className="about">
        <div className="about--container"> <h2>hi my name is abdul</h2>
          <p>a good frontend developer passion & learning</p>
          <div className="about--links">
            <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
          </div></div>

      </div>
      <div className="skil">
        <h1>skils</h1>
        <h3>front end </h3>
        <p className='skil--list'>html,css javascript,domManipulation,json,reactJs,redux</p>
      </div>
    </div>
  )
} 
