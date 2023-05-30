import React from 'react'
import "../style/footer.css"

export default function Footer() {
  return (
    <div className='footer' >
      <div className="--footer-links">
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
      <p className='footer--mail'>2023 abdulofficialbtw@gmail.com</p>
    </div>
  )
}
