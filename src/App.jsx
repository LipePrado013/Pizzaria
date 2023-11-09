import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Cadastrar from './pages/Cadastrar'
import Cardapio from './pages/Cardapio'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/cardapio" element={<Cardapio />} />
        {/* <Route path="/teste" element={<Aula />} />
          <Route path="/aula2" element={<Aula2 />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
