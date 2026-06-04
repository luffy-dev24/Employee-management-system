import react from "react";
import { useState , useRef , useEffect } from "react";
import axios from "axios";
import "../css/AddEmployeesComponent.css";



function AddEmployeesComponent(){

    let nameRef = useRef();
    let ageRef = useRef();
    let salaryRef = useRef();
    let profilePicRef = useRef();
    let [previewImage, setPreviewImage] = useState(null);

    let addEmployee= async ()=>{
        let inputdata={
            name:nameRef.current.value,
            age:ageRef.current.value,
            salary:salaryRef.current.value,
            profile_pic:profilePicRef.current.files[0]
        }
        console.log("inputdata",inputdata);
        let url = "http://127.0.0.1:8000/employees/add/";
        let response = await axios.post(url,inputdata ,{
            headers:{
                "Content-Type": "multipart/form-data",
            }
        });
        console.log(response);
    }
    
    let setpreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    return <div>
        <div className="add-employees-container">
            <h1> Add Employees </h1>
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
                <label>
                    Employee Profile Picture:
                    <input type="file" placeholder="Upload profile picture" ref={profilePicRef} onChange={setpreview} />
                </label>
                <br />
                {previewImage && <img src={previewImage} width="100px" height="100px" />}
                <br />
                <button onClick={addEmployee}>Add Employee</button>
            </div>
        </div>
    </div>

};  
export default AddEmployeesComponent;