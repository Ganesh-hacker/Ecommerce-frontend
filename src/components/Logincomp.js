import React from "react";
import "../index.css";
import LogRocket from 'logrocket'
LogRocket.init('ltvwsi/med-rover')
export default function Logincomp() {
    const [logindetails, setLogins] = React.useState({ name: "", password: "", rememberme: false });
    const backendurl="https://backend-3p4d.onrender.com"
    function handleChange(event) {
        const { value, name, type, checked } = event.target;
        setLogins(prevLogins => ({
            ...prevLogins,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(`https://backend-1-acmm.onrender.com/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(logindetails),
            });

            if (response.ok) {
                localStorage.setItem('username',logindetails.name)
                window.location.href = '/';
            } else {
               window.location.href='/wrongcredentials'
            }
        } catch (error) {
            window.location.href='/wrongcredentials'
        }
    }
    LogRocket.identify(logindetails.name)
    return (
        <div className="login">
            <div className="wrapper-1">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            id="username"
                            name="name"
                            value={logindetails.name}
                            onChange={handleChange}
                            required
                        />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                            value={logindetails.password}
                            onChange={handleChange}
                            required
                        />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="remember-forgot">
                        <label htmlFor="rememberme">
                            <input
                                name="rememberme"
                                type="checkbox"
                                id="rememberme"
                                checked={logindetails.rememberme}
                                onChange={handleChange}
                            /> Remember me
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
