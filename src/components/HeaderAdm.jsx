import React from "react";


function HeaderAdm() {
  return (
    <>

      <div className="h-[6rem] bg-red-600 flex justify-center">
        <div className=" w-[50rem] flex items-center justify-around">
          <a href="/adm" className='bg-white rounded-3xl pl-3 pr-3 shadow-[5px_5px_20px_-5px_black]'>Pedidos</a>
          <a href="/addpizza" className='bg-white rounded-3xl pl-3 pr-3 shadow-[5px_5px_20px_-5px_black]'>Adicionar pizza</a>
          <a href="/" className='bg-white rounded-3xl pl-3 pr-3 shadow-[5px_5px_20px_-5px_black]'>Sair</a>
        </div>
      </div>
    </>
  )
}
export default HeaderAdm