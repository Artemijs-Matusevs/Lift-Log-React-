import {useState} from "react";

export default function Register({onToggle}){

    // JSX for the sign-in page
    return(
        <div className="page lower-page">
            <h1 className="auth-header">REGISTER</h1>

            <form className="auth-form">
                <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Full Name*"
                />

                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email*"
                />

                <input
                    type="text"
                    name="username"
                    required
                    placeholder="Username*"
                />

                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password*"
                />


                <button className="register-button" type="submit">Submit</button>

                <p className="auth-subtext">Or login/sign-up using</p>
                <ion-icon name="logo-google"></ion-icon>

                <p onClick={onToggle} className="register-text">Login</p>
            </form>
        </div>
    )
}