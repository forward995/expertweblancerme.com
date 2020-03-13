import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function HomePage() {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" className="image-size"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Pricing</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Resources</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact US</Link>
                        </li>                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export { HomePage }