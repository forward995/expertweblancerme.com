import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

function RegisterPage() {
    
    useEffect(() => {
        document.getElementsByClassName("s2class")[0].style.color = "#748194";
        document.getElementsByClassName("s1class")[0].style.color = "#EE9BA3";
        document.getElementById("right").classList.remove("right_hover");
        document.getElementById("left").classList.add("left_hover");
        document.getElementsByClassName("signup")[0].style.display = "none";
        document.getElementsByClassName("signin")[0].style.display = "";
    }, [])

    function handleLeft() {
        document.getElementsByClassName("s2class")[0].style.color = "#748194";
        document.getElementsByClassName("s1class")[0].style.color = "#EE9BA3";
        document.getElementById("right").classList.remove("right_hover");
        document.getElementById("left").classList.add("left_hover");
        document.getElementsByClassName("signup")[0].style.display = "none";
        document.getElementsByClassName("signin")[0].style.display = "";
    }

    return (
        <div className="container">
            <div className="c1">
                <div className="c11">
                    <h1 className="mainhead">PICK YOUR SPOT</h1>
                    <p className="mainp">Just click the buttons below to toggle between SignIn &amp; SignUp</p>
                </div>
                <Link to="/left" id="left">
                    <h1 className="s1class"><span>SIGN</span><span className="su">IN</span></h1>
                </Link>
                <div id="right" onClick={handleLeft}>
                    <h1 className="s2class"><span>SIGN</span><span className="su">UP</span></h1>
                </div>
            </div>
            <div className="c2">
                <form className="signup">
                    <h1 className="signup1">SIGN UP</h1>
                    <br /><br /><br /><br />
                    <input name="username" type="text" placeholder="Username*" className="username" />
                    <input name="email" type="text" placeholder="Email*" className="username" />
                    <input name="password" type="password" placeholder="Password*" className="username" />
                    <button className="btn">Sign Up</button>
                </form>
                <form className="signin">
                    <h1 className="signup1">SIGN IN</h1>
                    <br /><br /><br /><br />
                    <input name="username" type="text" placeholder="Username*" className="username" />
                    <input name="password" type="password" placeholder="Password*" className="username" />
                    <button className="btn">Get Started</button>
                    <br /><br /><br /><br />
                    <Link to="/"><p className="signup2">Forget Password?</p></Link>
                </form>
            </div>
        </div>
    )
}

export { RegisterPage }