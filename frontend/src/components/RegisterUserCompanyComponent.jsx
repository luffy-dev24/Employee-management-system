import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
import '../css/RegisterUserCompany.css';

function RegisterUserCompanyComponent() {
    let nameRef = useRef();
    let emailRef = useRef();
    let companyNameRef = useRef();
    let passwordRef = useRef();

    const navigate = useNavigate();

    let registerUserCompany = async () =>{
        let inpudata = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            company: companyNameRef.current.value,
            password: passwordRef.current.value
        }
        let url = "http://127.0.0.1:8000/userss/register/"
        try{
            let response = await axios.post(url, inpudata);
            if(response.status === 201){
                navigate("/view)")
            }else{
                alert("Registration failed. Please try again.");
            }
        }
        catch(error){
            alert("An error occurred. Please try again.");
        }

    }

    return (
        <div className="register-page">
            <div className="register-card">
                <h1>Create Account</h1>
                <p className="register-subtitle">Register your company and get started</p>

                <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" ref={nameRef} />
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" ref={emailRef} />
                </div>

                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" placeholder="Enter company name" ref={companyNameRef} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" ref={passwordRef} />
                </div>

                <button className="register-btn" onClick={registerUserCompany}>
                    Register
                </button>

                <p className="login-link">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
}

export default RegisterUserCompanyComponent;