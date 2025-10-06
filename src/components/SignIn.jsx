import {useState} from "react";

export default function SignInPage({onToggle, onLoginSuccess}){

    // State for login data
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();// Prevent default form submission

        //Authentication logic goes here
        //Hard coded values for demo purposes
        if(loginData.username === "user" && loginData.password === "pass"){
            onLoginSuccess(); // Notify parent component of successful login
        } else {
            alert("Invalid credentials. Please try again.");
        }
    }

    // JSX for the sign-in page
    return(
        <div className="page lower-page">
            <h1 className="auth-header">LOGIN</h1>

            <form onSubmit={handleSubmit} className="auth-form">
                <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    onChange={handleInputChange}
                    required
                    placeholder="Username*"
                />

                <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Password*"
                />

                <div className="forgot-password-container">
                    <a className="forgot-password" href="www.google.com">Forgot password?</a>
                </div>

                <button type="submit">Submit</button>

                <p className="auth-subtext">Or login/sign-up using</p>
                <ion-icon className="google-icon" name="logo-google"></ion-icon>

                <p onClick={onToggle} className="register-text">Register</p>
            </form>
        </div>
    )
}