import "../css/EmployeeCard.css";

function EmployeeCard(props){
    console.log("props",props);
    return <div className="EmployeeCard">
        <div className="EmployeeDetails">
            <div>
                <h2>Name: {props.name}</h2>
                <p>Age: {props.age}</p>
                <p>Salary: {props.salary}</p>
            </div>
            <div>
                {props.profilePic ? <img src={props.profilePic}  width="100px" height="100px" /> : " "}
            </div>
        </div>
        <div className="EmployeeActions">
            <button className="delete-btn" onClick={() => props.deletefunction(props.empId)}>Delete</button>
            <button className="update-btn" onClick={() => props.updatefunction(props.empId)}>Update</button>
        </div>
    </div>
}
export default EmployeeCard;