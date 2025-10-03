import {useState} from "react";

export default function Register({onToggle}){

    // JSX for the sign-in page
    return(
        <div className="page lower-page">   
            <h1> HELLO AINSLEYYYYYY </h1>
            <p onClick={onToggle} className="login-text">Login</p>
        </div>
    )
}