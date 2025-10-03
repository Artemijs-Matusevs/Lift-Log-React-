import {useState} from "react";

export default function SignInPage({onToggle}){

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

        console.log("Login Data:", loginData);
        //Authentication logic goes here
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
                <ion-icon name="logo-google"></ion-icon>

                <p onClick={onToggle} className="register-text">Register</p>
            </form>
        </div>
    )
}