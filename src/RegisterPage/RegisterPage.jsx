import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions'
import { Link } from 'react-router-dom';
import '../assets/styles.css';

function RegisterPage() {

    const [ user, setUser ] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = user;
    const [ submitted, setSubmitted ] = useState(false)
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();
    
    useEffect(() => {
        document.getElementById("left").classList.remove("left_hover");
        document.getElementsByClassName("s2class")[0].style.color = "#EE9BA3";
        document.getElementsByClassName("s1class")[0].style.color = "#748194";
        document.getElementById("right").classList.add("right_hover");
        // document.getElementsByClassName("signin")[0].style.display = "none";
        document.getElementsByClassName("signup")[0].style.display = "";
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        
        if(username && email && password) {
            dispatch(userActions.register(user))
        }
    }

    return (
        <div className="custom-container">
            <div className="c1">
                <div className="c11">
                    <h1 className="mainhead">PICK YOUR SPOT</h1>
                    <p className="mainp">Just click the buttons below to toggle between SignIn &amp; SignUp</p>
                </div>
                <Link to="/left" id="left">
                    <h1 className="s1class"><span>SIGN</span><span className="su">IN</span></h1>
                </Link>
                <div id="right">
                    <h1 className="s2class"><span>SIGN</span><span className="su">UP</span></h1>
                </div>
            </div>
            <div className="c2">
                <form className="signup" onSubmit={handleSubmit}>
                    <br /><br />
                    <h1 className="signup1">SIGN UP</h1>
                    <br /><br />
                    <input 
                        name="username" 
                        type="text" 
                        placeholder="Username*" 
                        className={'username' + (submitted && !user.username ? ' is-invalid' : '')}
                        value={username}
                        onChange={handleChange}
                    />
                    {
                        submitted && !user.username &&
                        <div className="invalid-feedback" style={{marginLeft: 35}}>Username is required</div>
                    }
                    <input 
                        name="email" 
                        type="text" 
                        placeholder="Email*" 
                        className={'username' + (submitted && !user.email ? ' is-invalid' : '')}
                        value={email}
                        onChange={handleChange}
                    />
                    {
                        submitted && !user.username &&
                        <div className="invalid-feedback" style={{marginLeft: 35}}>Email is required</div>
                    }
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Password*" 
                        className={'username' + (submitted && !user.password ? ' is-invalid' : '')}
                        value={password}
                        onChange={handleChange}
                    />
                    {
                        submitted && !user.username &&
                        <div className="invalid-feedback" style={{marginLeft: 35}}>Password is required</div>
                    }
                    <button className="btn">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export { RegisterPage }