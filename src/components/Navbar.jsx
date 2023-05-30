import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../style/Navbar.css"

export default function Navbar() {

    const [toggel, settoggel] = useState(false)
    const Loction = useLocation()


    useEffect(() => {   
        settoggel(false)
    }, [Loction])

    return (
        <div className='nav-bar' id={toggel ? 'open' : 'close'}>

            <button onClick={() => {
                settoggel(!toggel)
            }}>
                <ion-icon name="menu-outline"></ion-icon>
            </button>

            <div className="links" >
                <Link to='/'>HOME</Link>
                <Link to='/Projects'>Projects</Link>
                <Link to='/Experience'>Experience</Link>
            </div>


        </div>
    )
}
