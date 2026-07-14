import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCar from './components/AddCar'
import ViewCar from './components/ViewCar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
    <Routes>
  {/* <Route index element={<StepOne />} /> */}
  <Route path="/" element={<AddCar />} />
  <Route path="view" element={<ViewCar />} />
</Routes>
     </BrowserRouter>
    </>
  )
}

export default App
