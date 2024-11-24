import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllTransaction from './pages/AllTransaction'
import AddTransaction from './pages/AddTransaction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<AllTransaction />} />
      <Route path='/add-transation' element={<AddTransaction />}  />
     </Routes>
    </BrowserRouter>
  )
}

export default App
