import React from "react";
import "../css/RegisterUserCompany.css"
import { useRef } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

function LoginComponent(){
    let emailRef = useRef();
    let passwordRef = useRef();
    let  navigate = useNavigate();

    let loginFunction = async ()=>{
        let url = "http://127.0.0.1:8000/userss/login/";
        let inputdata = {
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        let response = await axios.post(url,inputdata)

        localStorage.setItem("accessToken" , response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("email",response.data.email);
        localStorage.setItem("userId",response.data.id);

        navigate("/main")
    };

    return (
         <div className="register-page">
            <div className="register-card">
                <h1>Login</h1>
                <p className="register-subtitle">Login and get started</p>


                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" ref={emailRef} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" ref={passwordRef} />
                </div>

                <button className="register-btn" onClick={loginFunction}>
                    Login
                </button>

                <p className="login-link">
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </div>
        </div>
    )
};
export default LoginComponent;