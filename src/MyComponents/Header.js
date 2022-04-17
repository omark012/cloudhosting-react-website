import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo">Cloudways</h1>
                <nav>
                    <ul className="nav-items">
                        <li><Link to="/"><span></span> Home</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/docs">Docs</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
