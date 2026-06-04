import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

function DeleteEmployeeComponent() {
    const { id } = useParams();
    let nav = useNavigate();

    let deleteEmployee = async () => {
        let url = "http://127.0.0.1:8000/employees/update/" + id + "/";
        let response = await axios.delete(url);
        nav('/view');
    }
    return <>
        <h1>Delete Page</h1>
        <p>Are you sure you want to delete employee with ID: {id}?</p>
        <button onClick={deleteEmployee}>Yes, Delete</button>
        <button onClick={() => {nav(-1)}}>No, Cancel</button>
    </>
}
export default DeleteEmployeeComponent;