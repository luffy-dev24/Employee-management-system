import React, { useState, useRef } from "react";
import axios from "axios";
import "../css/AddEmployeesComponent.css";

function AddEmployeesComponent() {
    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
    let roleRef = useRef();
    let ageRef = useRef();
    let salaryRef = useRef();
    let profilePicRef = useRef();
    let [previewImage, setPreviewImage] = useState(null);
    let userid = localStorage.getItem("userId");

    let addEmployee = async () => {
        let formData = new FormData();
        formData.append("user_id", userid);
        formData.append("name", nameRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("password", passwordRef.current.value);
        formData.append("role", roleRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("salary", salaryRef.current.value);
        formData.append("profile_pic", profilePicRef.current.files[0]);

        console.log("Sending formData...");
        let url = "http://127.0.0.1:8000/employees/add/";
        let response = await axios.post(url, formData);
        console.log(response);
    };

    let setpreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="register-page">
            <div className="register-card">
                <h1>Create Account For Employee</h1>

                <div className="form-group">
                    <label>Employee Name</label>
                    <input type="text" placeholder="Enter your name" ref={nameRef} />
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" ref={emailRef} />
                </div>

                <div className="form-group">
                    <label>Role</label>
                    <select ref={roleRef}>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" ref={passwordRef} />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="number" placeholder="Enter age" ref={ageRef} />
                </div>

                <div className="form-group">
                    <label>Salary</label>
                    <input type="number" placeholder="Enter salary" ref={salaryRef} />
                </div>

                <div className="form-group">
                    <label>Profile Pic</label>
                    <input type="file" ref={profilePicRef} onChange={setpreview} />
                </div>

                {previewImage && (
                    <div className="form-group">
                        <img src={previewImage} alt="Preview" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%" }} />
                    </div>
                )}

                <button className="register-btn" onClick={addEmployee}>
                    Add Employee
                </button>
            </div>
        </div>
    );
}

export default AddEmployeesComponent;