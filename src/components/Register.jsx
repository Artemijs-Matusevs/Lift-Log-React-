import {useState} from "react";

export default function Register({onToggle}){

    // JSX for the sign-in page
    return(
        <div className="page lower-page">
            <h1 className="auth-header main-header">REGISTER</h1>
            <p onClick={onToggle} className="register-text">Login</p>

            <form className="auth-form">
                <input
                    type="text"
                    name="username"
                    required
                    placeholder="username*"
                />

                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email*"
                />

                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password*"
                />

                <input
                    type="password"
                    name="password-confirm"
                    required
                    placeholder="Confirm password*"
                />


                <button className="register-button" type="submit">Submit</button>

                <p className="auth-subtext">Or login/sign-up using</p>
                <ion-icon className="google-icon" name="logo-google"></ion-icon>

            </form>
        </div>
    )
}