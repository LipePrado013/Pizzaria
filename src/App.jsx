import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Cadastrar from './pages/Cadastrar'
import Cardapio from './pages/Cardapio'
import Aula from './pages/aula2809'
import Aula2 from './pages/aula0510'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/cardapio" element={<Cardapio />} />
        {/* <Route path="/teste" element={<Aula />} />
          <Route path="/aula2" element={<Aula2 />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
