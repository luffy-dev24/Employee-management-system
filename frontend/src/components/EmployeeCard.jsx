import "../css/EmployeeCard.css";
import { EmployeeListContext } from "./ViewEmployeesComponent";
import { useContext } from "react";

function EmployeeCard({ empId }) {

    // ✅ Pull everything from context instead of props
    let { employees, navigateToUpdate, navigateToDelete, imageUrl } = useContext(EmployeeListContext);

    // ✅ Find this card's employee data by id
    let employee = employees.find(e => e.id === empId);

    if (!employee) return null;

    return (
        <div className="EmployeeCard">
            <div className="EmployeeDetails">
                <div>
                    <h2>Name: {employee.name}</h2>
                    <p>Age: {employee.age}</p>
                    <p>Salary: {employee.salary}</p>
                </div>
                <div>
                    {employee.profile_pic
                        ? <img src={imageUrl + employee.profile_pic} width="100px" height="100px" />
                        : null
                    }
                </div>
            </div>
            <div className="EmployeeActions">
                <button className="delete-btn" onClick={() => navigateToDelete(empId)}>Delete</button>
                <button className="update-btn" onClick={() => navigateToUpdate(empId)}>Update</button>
            </div>
        </div>
    );
}

export default EmployeeCard;