import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../style/Navbar.css"

export default function Navbar() {

    const [toggel, settoggel] = useState(false)
    const Loction = useLocation()



    const [navvalue, setnavvalue] = useState(1)

    const navi = (value) => {
        setnavvalue(value)

    }


    useEffect(() => {
        settoggel(false)
    }, [Loction])


    return (
        <div className='nav-bar' id={toggel ? 'open' : 'close'}>

            <button className='toggel-button' onClick={() => {
                settoggel(!toggel)
            }}>
                <ion-icon name="menu-outline"></ion-icon>
            </button>

            <div className="links" >
                <Link className={navvalue === 1 ? ' active navi' : ''} to='/' onClick={() => {
                    navi(1)
                }}>Home</Link>
                <Link className={navvalue === 2 ? ' active navi' : ''} to='/Projects' onClick={() => {
                    navi(2)
                }}>Projects</Link>
                <Link className={navvalue === 3 ? ' active navi' : ''} to='/Experience' onClick={() => {
                    navi(3)
                }}>Experience</Link>
            </div>
        </div>
    )
}
