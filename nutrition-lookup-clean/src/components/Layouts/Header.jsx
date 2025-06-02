import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Utensils, Search, Home, Info } from 'lucide-react'

function Header() {
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <Utensils className="logo-icon" />
                    <div className="logo-text">
                        <h1>Nutrition Lookup</h1>
                        <p>Powered by USDA</p>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="nav">
                    <Link
                        to="/"
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                        <Home className="nav-icon" />
                        Home
                    </Link>

                    <Link
                        to="/search"
                        className={`nav-link ${isActive('/search') ? 'active' : ''}`}
                    >
                        <Search className="nav-icon" />
                        Search
                    </Link>

                    <Link
                        to="/about"
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    >
                        <Info className="nav-icon" />
                        About
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header