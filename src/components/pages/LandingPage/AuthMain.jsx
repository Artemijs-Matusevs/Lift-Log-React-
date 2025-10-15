import {useState} from "react";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignIn";
import Register from "./components/Register";

export default function AuthMain({onLoginSuccess}){

    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    }

    return(
        <div className="login-main-container">
            <LandingPage />
            
            {isLogin ? (
                <SignInPage onToggle={toggleAuthMode} onLoginSuccess={onLoginSuccess} />
            ) : (
                <Register onToggle={toggleAuthMode} />  
            )}
        </div>
    )
}

