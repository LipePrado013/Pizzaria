import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Login from './pages/login'
import AddPizza from './pages/AddPizza'
import PedidosAdm from './pages/PedidosAdm'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/adm" element={<PedidosAdm />} />
        <Route path="/addpizza" element={<AddPizza />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
