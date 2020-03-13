import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions'
import { Link } from 'react-router-dom';
import '../assets/styles.css';

function LoginPage() {

    const [ inputs, setInputs ] = useState({ username: '', password: '' })
    const { username, password } = inputs;
    const [ submitted, setSubmitted ] = useState(false);
    const loggingIn = useSelector(state => state.authentication.loggingIn)
    const dispatch = useDispatch();
    
    useEffect(() => { 
        document.getElementsByClassName("s2class")[0].style.color = "#748194";
        document.getElementsByClassName("s1class")[0].style.color = "#EE9BA3";
        document.getElementById("right").classList.remove("right_hover");
        document.getElementById("left").classList.add("left_hover");
        document.getElementsByClassName("signin")[0].style.display = "";
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if( username && password ) {
            dispatch(userActions.login(username, password))
        }
    }   

    return (
        <div className="custom-container">
            <div className="c1">
                <div className="c11">
                    <h1 className="mainhead">PICK YOUR SPOT</h1>
                    <p className="mainp">Just click the buttons below to toggle between SignIn &amp; SignUp</p>
                </div>
                <div id="left">
                    <h1 className="s1class"><span>SIGN</span><span className="su">IN</span></h1>
                </div>
                <Link to="/register" id="right">
                    <h1 className="s2class"><span>SIGN</span><span className="su">UP</span></h1>
                </Link>
            </div>
            <div className="c2">
                <form className="signin" onSubmit={handleSubmit}>
                    <br /><br />
                    <h1 className="signup1">SIGN IN</h1>
                    <br /><br />
                    <input 
                        name="username" 
                        type="text" 
                        placeholder="Username*" 
                        className={'username' + (submitted && !username ? ' is-invalid' : '')}
                        value={username}
                        onChange={handleChange}
                    />
                    {submitted && !username &&
                        <div className="invalid-feedback" style={{marginLeft: 35}}>Username is required</div>
                    }
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Password*" 
                        className={'username' + (submitted && !password ? ' is-invalid' : '')}
                        value={password}
                        onChange={handleChange}
                    />
                    {submitted && !password &&
                        <div className="invalid-feedback" style={{marginLeft: 35}}>Password is required</div>
                    }
                    <button className="btn">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Get Started
                    </button>
                    <br /><br /><br /><br />
                    <Link to="/"><p className="signup2">Forget Password?</p></Link>
                </form>
            </div>
        </div>
    )
}

export { LoginPage };