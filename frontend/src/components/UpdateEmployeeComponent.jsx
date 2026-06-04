import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {  useEffect , useState  ,useRef} from 'react';
import "../css/UpdateEmployeeComponent.css";
import "../assets/hero.png";
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateEmployeeComponent() {
    const { id } = useParams();
    console.log("id", id);
    let [employeeDetails, setEmployeeDetails] = useState([]);
    let imageUrl = "http://127.0.0.1:8000/";
    let [previewImage, setPreviewImage] = useState(null);
    let nav = useNavigate();

    let imageRef = useRef(null);
    let nameRef = useRef(null);
    let ageRef = useRef(null);
    let salaryRef = useRef(null);


    let getEmployeeDetails = async ()=>{
        let url = "http://127.0.0.1:8000/employees/update/"+id; 
        let response = await axios.get(url);
        console.log(response);
        setEmployeeDetails(response.data);
        {response.data.profile_pic ? setPreviewImage(imageUrl + response.data.profile_pic) : setPreviewImage(null)}
    }

    let changeImage = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    }

    let updateEmployee = async ()=>{
        let inputdata = {
            name:nameRef.current.value,
            age:ageRef.current.value,
            salary:salaryRef.current.value,
            profile_pic:imageRef.current.files[0]
        }
        console.log("inputdata",inputdata);
        let url = "http://127.0.0.1:8000/employees/update/"+id+ "/";
        let response = await axios.put(url, inputdata,
            {headers:{'Content-Type': 'multipart/form-data'}});
        nav('/view')
    };

    useEffect(()=>{
        getEmployeeDetails();
    },[])


    return <>
        <h1>Update Details for {employeeDetails.name}</h1>
        
        <div>
            <label>
                Employee Name:
                <input type="text" placeholder="Enter employee name" ref={nameRef} defaultValue={employeeDetails.name} />
            </label>
            <br />
            <label>
                Employee Age:
                <input type="number" placeholder="Enter employee age" ref={ageRef} defaultValue={employeeDetails.age} />
            </label>
            <br />
            <label>
                Employee Salary:
                <input type="number" placeholder="Enter employee salary" ref={salaryRef} defaultValue={employeeDetails.salary} />
            </label>
            <br />
            <div className='profilepicpreview'>
                <div>
                    <label>
                        Employee Profile Picture :
                        <input type="file" placeholder="Enter employee profile picture URL" ref={imageRef} 
                        onChange={changeImage} />
                    </label>
                </div>
                
                <div> 
                    {previewImage ? <img src={previewImage} className="profile" /> : "No profile picture"}
                </div>
            </div>
            <br />
            <button onClick={updateEmployee}>Update</button>
            
        </div>
    </>
}
export default UpdateEmployeeComponent;