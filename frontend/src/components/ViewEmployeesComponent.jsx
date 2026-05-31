import React from 'react';
import { useState,useEffect } from 'react'
import axios from 'axios';


function ViewEmployeesComponent(){
    let [employees,setEmployees] = useState([]);

    let getEmployees = async ()=>{
        let url = "http://127.0.0.1:8000/employees/add/";
        let response = await axios.get(url);
        console.log(response);
    }

    useEffect(()=>{
        getEmployees();
    },[])
    return <></>
}
export default ViewEmployeesComponent;