import React from "react";
import "../index.css";

export default function RegistrationComp() {
    const [registerDetails, setRegisterDetails] = React.useState({ name: "", email: "", otp: "", mno: "", password: "" });
    const backendurl="https://backend-3p4d.onrender.com"
    const [verifystate,setverify]=React.useState(false)
    function handleChange(event) {
        const { value, name } = event.target;
        setRegisterDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(`https://backend-1-acmm.onrender.com/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerDetails),
            });

            if (response.status === 201) {
                window.location.href = '/successful';
            } else if (response.status === 409) {
                window.location.href = '/urexist';
            } else {
                console.error('Unexpected response:', response.statusText);
                alert('An unexpected error occurred. Please try again later.');
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    // Request OTP function
    const requestOTP = () => {
        fetch(`${backendurl}/request-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: registerDetails.email })
        })
        .then(response => {
            if (response.ok) {
                console.log('OTP requested successfully');
                // Update state to indicate that OTP has been requested
                setRegisterDetails(prevState => ({
                    ...prevState,
                    otp: ''
                }));
            } else {
                console.error('Failed to request OTP');
            }
        })
        .catch(error => {
            console.error('Network error:', error);
        });
    };
    //verify otp-------------------------------------------------------------------------
    const verifyOTP = () => {
        fetch(`${backendurl}/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: registerDetails.email, otp: registerDetails.otp })
        })
        .then(response => {
            if (response.ok) {
                console.log('OTP verified successfully');
                setverify(true)
            } else {
                console.error('OTP verification failed');
                setverify(false)
            }
        })
        .catch(error => {
            console.error('Network error:', error);
        });
    };

    return (
        <div className="login">
            <div className="wrapper-1">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="name"
                            value={registerDetails.name}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            value={registerDetails.email}
                            onChange={handleChange}
                            placeholder="E-mail"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            name="otp"
                            value={registerDetails.otp}
                            onChange={handleChange}
                            placeholder="Enter OTP"
                            required
                        />
                        </div>
                        <div className="input-boxbuttons">
                        <button type="button" onClick={requestOTP}>Request OTP</button>
                        <button type="button" onClick={verifyOTP}>Verify OTP</button>
                        {verifystate && <p >Verified</p>}<br/>
                        {!verifystate && <p>Not Verified</p>}<br/>

                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            name="mno"
                            value={registerDetails.mno}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            value={registerDetails.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}