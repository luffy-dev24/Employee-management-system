import React from 'react';
import { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios';
import EmployeeCard from './EmployeeCard';
import "../css/ViewEmployeesComponent.css";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';

export const EmployeeListContext = createContext();

function ViewEmployeesComponent() {
    let [userLogin, setUserLogin] = useContext(MyContext);
    let [employees, setEmployees] = useState([]);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(true);
    let imageUrl = "http://127.0.0.1:8000/";
    let navigate = useNavigate();

    let getEmployees = async () => {
        try {
            let url = "http://127.0.0.1:8000/employees/add/";
            let response = await axios.get(url);
            setEmployees(response.data);
        } catch (err) {
            setError("Failed to fetch employees. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    let navigateToUpdate = (id) => {
        navigate("/main/update/" + id);
    }

    let navigateToDelete = (id) => {
        navigate("/main/delete/" + id);
    }

    useEffect(() => {
        
        getEmployees();
    }, [])

    return (
        <>
            <h1>Employees Details view page</h1>

            <div className="EmployeesContainer">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="error-msg">{error}</p>
                ) : employees.length > 0 ? (

                    // ✅ Wrap all cards inside one Provider
                    <EmployeeListContext.Provider value={{
                        employees,
                        setEmployees,
                        navigateToUpdate,
                        navigateToDelete,
                        imageUrl
                    }}>
                        {employees.map((e, i) => (
                            <EmployeeCard key={i} empId={e.id} />
                        ))}
                    </EmployeeListContext.Provider>

                ) : (
                    <p>No employees found. Please add some employees.</p>
                )}
            </div>
        </>
    );
}

export default ViewEmployeesComponent;