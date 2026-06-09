import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import ViewEmployeesComponent from './ViewEmployeesComponent';
import AddEmployeesComponent from './AddEmployeesComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
import DeleteEmployeeComponent from './DeleteEmployeeComponent';


function MainLayout(){
    return <div>
        <HeaderComponent />
        <div>
            <Outlet />
        </div>
    </div>
};
export default MainLayout;