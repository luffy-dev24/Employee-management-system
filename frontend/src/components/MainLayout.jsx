import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import ViewEmployeesComponent from './ViewEmployeesComponent';
import AddEmployeesComponent from './AddEmployeesComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
import DeleteEmployeeComponent from './DeleteEmployeeComponent';
import { useEffect } from 'react';
import { MyContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function MainLayout(){
    let navigate = useNavigate();
    let [userLogin, setUserLogin] = useContext(MyContext);
    let role = localStorage.getItem("role")
    
    useEffect(()=>{
        
        
        if(!userLogin){
            localStorage.clear()
            navigate("/login");
            return;  // ✅ stops execution, role check never runs
        }
        
        if(role === "founder"){
            navigate("/main/view");
        }
    },[])
    return (<div>
        <HeaderComponent />
        <div>
            <Outlet />
        </div>
    </div>)
};
export default MainLayout;