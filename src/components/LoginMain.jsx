import {useRef} from "react";
import LandingPage from "./LandingPage";
import SignInPage from "./signInPage";

export default function LoginMain(){

    return(
        <div className="login-main-container">
            <LandingPage />
            <SignInPage />
        </div>
    )
}

