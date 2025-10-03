import {useState} from "react";

export default function SignInPage(){

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
            <h1>LOGIN</h1>

            <form onSubmit={handleSubmit}>
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

                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}