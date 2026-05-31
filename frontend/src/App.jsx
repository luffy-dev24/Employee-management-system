import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ViewEmployeesComponent from './components/ViewEmployeesComponent'
import AddEmployeesComponent from './components/AddEmployeesComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <AddEmployeesComponent />
    </div>
  )
}

export default App;
