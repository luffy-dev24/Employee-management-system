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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/view' element={<ViewEmployeesComponent />} />
        <Route path='/add' element={<AddEmployeesComponent />} />
        <Route path='/update/:id' element={<UpdateEmployeeComponent />} />
        <Route path='/delete/:id' element={<DeleteEmployeeComponent />} />
      </Routes>
    </div>
  )
}

export default App;
