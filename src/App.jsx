import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCar from './components/AddCar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
    <Routes>
  {/* <Route index element={<StepOne />} /> */}
  <Route path="/" element={<AddCar />} />
  {/* <Route path="search" element={<SearchHb />} />
  <Route path="delete" element={<DeleteHb />} />
  <Route path="view" element={<ViewHb />} /> */}
</Routes>
     </BrowserRouter>
    </>
  )
}

export default App
