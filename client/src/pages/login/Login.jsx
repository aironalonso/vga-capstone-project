import React, { useContext, useRef } from 'react';
import './login.css';
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">VGA</h3>
                    <span className="loginDesc">
                        Show your artworks and let the world see your creativity
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="loginInput"
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            ref={password}
                        />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Log In"
                            )}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Create a New Account"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;