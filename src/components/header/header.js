import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <header className="d-flex header" id="header">
            <h2>
                <Link to="/">Star DB</Link>
            </h2>
            <nav className="nav">
                <ul className="d-flex nav__list">
                    <li className="nav__list-item">
                        <Link to="/people/">People</Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/planets/">Planets</Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/starships/">Starships</Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/secret">Secret</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header