import { useState } from "react"

function Teste() {
const [troca, setTroca] = useState(true)

  return (
    <>
<div className="flex flex-col justify-center items-center h-screen "> 
    <div className="border border-black w-[30rem] rounded-t-lg bg-white z-10 p-1 ">
        <button onClick={()=> setTroca(!troca)} className="p-2 bg-red-600 rounded-lg">{troca ? ('Login'):('Cadastro')}</button>
    </div>
     {troca ? (
      
        <div className="bg-gray-500 w-[30rem] h-[25rem] border border-black p-2 rounded-b-lg shadow-[0px_0px_20px_-5px_black]">
            <form action="/home" method="get" className="flex flex-col gap-5 items-center">
            <h1 className='text-5xl text-white font-bold mb-10'>Login</h1>
            <input type="text" id='email' placeholder="E-mail" className="p-1 rounded-lg" />
            <input type="text" placeholder="Senha" className="p-1 rounded-lg" />
            <button className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg">Logar</button>
            <a href='/cadastrar' className="pt-2 pb-2 pl-10 pr-10  text-xl font-bold text-white rounded-lg">Cadastrar</a>
          
          </form>
        </div>
    ):(  
      
        <div className="bg-gray-500 w-[30rem] h-[25rem] border border-black p-2 rounded-b-lg shadow-[0px_0px_20px_-5px_red]">
            <form action="/" method="get" className="flex flex-col gap-5 items-center">
            <h1 className='text-5xl text-white font-bold mb-10'>Cadastro</h1>
            <input type="text" placeholder="Nome" className="p-1 rounded-lg" />
            <input type="text" placeholder="E-mail" className="p-1 rounded-lg" />
            <input type="text" placeholder="Senha" className="p-1 rounded-lg" />
            <input type="text" placeholder="Senha" className="p-1 rounded-lg" />
            <button className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg">Cadastrar</button>
          </form>
        </div>
      )
      }
      </div>
    </>
  )
}

export default Teste