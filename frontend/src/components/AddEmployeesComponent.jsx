import react from "react";
import { useState , useRef , useEffect } from "react";
import axios from "axios";
import "../css/AddEmployeesComponent.css";



function AddEmployeesComponent(){

    let nameRef = useRef();
    let ageRef = useRef();
    let salaryRef = useRef();

    let addEmployee= async ()=>{
        let inputdata={
            name:nameRef.current.value,
            age:ageRef.current.value,
            salary:salaryRef.current.value
        }
        let url = "http://127.0.0.1:8000/employees/add/";
        let response = await axios.post(url,inputdata);
        console.log(response);
    }
    



    return <div>
        <div className="add-employees-container">
            <h1> Add Employees Component </h1>
            <div>
                <label>
                    Employee Name:
                    <input type="text" placeholder="Enter employee name" ref={nameRef} />
                </label>
                <br />
                <label>
                    Employee Age:
                    <input type="number" placeholder="Enter employee age" ref={ageRef} />
                </label>
                <br />
                <label>
                    Employee Salary:
                    <input type="number" placeholder="Enter employee salary" ref={salaryRef} />
                </label>
                <br />
                <button onClick={addEmployee}>Add Employee</button>
            </div>
        </div>
    </div>

};  
export default AddEmployeesComponent;