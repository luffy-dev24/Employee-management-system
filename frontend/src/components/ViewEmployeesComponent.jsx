import React from 'react';
import { useState,useEffect } from 'react'
import axios from 'axios';
import EmployeeCard from './EmployeeCard';
import "../css/ViewEmployeesComponent.css";

function ViewEmployeesComponent(){
    let [employees,setEmployees] = useState([]);
    let imageUrl = "http://127.0.0.1:8000/"

    let getEmployees = async ()=>{
        let url = "http://127.0.0.1:8000/employees/add/";
        let response = await axios.get(url);
        console.log(response);
        setEmployees(response.data);
        
    }

    useEffect(()=>{
        getEmployees();
    },[])
    return <>
        <h1>Employees Details</h1>
        <div className="EmployeesContainer">
            {employees.map((e, i)=>{
                return <EmployeeCard key={i} name={e.name} age={e.age} salary={e.salary} 
                profilePic={e.profile_pic ? imageUrl + e.profile_pic : " "} />
            })}
        </div>
    </>
}
export default ViewEmployeesComponent;