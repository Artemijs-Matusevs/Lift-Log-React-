import {useRef} from "react";

export default function LoginMain(){

    return(
        <div className="login-main-container">
            <LandingPage />
            <SignInPage />
        </div>
    )
}


function LandingPage(){
    return(
        <div className="page upper-page">
            <h2 className="strike">MOTIVATIO<span className="last-letter">N</span></h2>
            <h1>DISCIPLIN<span className="last-letter">E</span></h1>
            <h3>Log your lifts</h3>
            <img className="login-main-image" src="/img/frog-with-log-noBG.png" alt="Login Main Image"/>
            <p>swipe up</p>
        </div>
    )
}

function SignInPage(){
    return(
        <div className="page lower-page">
            <h1>LOGIN</h1>
        </div>
    )
}