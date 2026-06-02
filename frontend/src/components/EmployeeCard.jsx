import "../css/EmployeeCard.css";

function EmployeeCard(props){
    console.log("props",props);
    return <div className="EmployeeCard">
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Salary: {props.salary}</p>
        <img src={props.profilePic} alt="Profile Picture" width="100px" height="100px" />   
    </div>
}
export default EmployeeCard;