import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ViewEmployeesComponent from './components/ViewEmployeesComponent'
import AddEmployeesComponent from './components/AddEmployeesComponent'
import {Routes, Route } from 'react-router-dom';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import DeleteEmployeeComponent from './components/DeleteEmployeeComponent';
import RegisterUserCompanyComponent from './components/RegisterUserCompanyComponent';
import MainLayout from './components/MainLayout'
import LoginComponent from './components/LoginComponent'
import { createContext } from 'react'


export const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  let [userLogin , setUserLogin] = useState(false)

  return (
    <div>
      <MyContext.Provider value={[userLogin , setUserLogin]}>
      <Routes>
        <Route path="/register" element ={<RegisterUserCompanyComponent />} />
        <Route path="/login" element ={<LoginComponent />} />
        <Route path="/main" element={<MainLayout/>}>
          <Route path='view' element={<ViewEmployeesComponent />} />
          <Route path='add' element={<AddEmployeesComponent />} />
          <Route path='update/:id' element={<UpdateEmployeeComponent />} />
          <Route path='delete/:id' element={<DeleteEmployeeComponent />} />
        </Route>
      </Routes>
      </MyContext.Provider>
    </div>
  )
}

export default App;
