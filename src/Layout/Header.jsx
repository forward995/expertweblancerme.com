import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../assets/styles.css';

function Header() {
    const [className, setClassName] = useState("");

    function handleScroll() {
        if (window.pageYOffset > 0) {
            if(!className){
                setClassName("blue");   
            }
        }else{
            if(className){
                setClassName("");   
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })

    return (
        <div className={'header ' + className}>
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
                            <li className="nav-item">
                                <Link className="nav-link login_btn" to="/login">Log In</Link>
                            </li>                        
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export { Header }