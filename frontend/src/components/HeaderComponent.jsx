import   "../css/HeaderComponent.css"
import { Link } from "react-router-dom";

function HeaderComponent(){
    return <div>
        <header className="header">
            <p>Employee Management System </p>
            <nav>
                <ul>
                    <li><Link to="/view">View Employees</Link></li>
                    <li><Link to="/add">Add Employee</Link></li>
                </ul>
            </nav>
        </header>
    </div>

}
export default HeaderComponent;