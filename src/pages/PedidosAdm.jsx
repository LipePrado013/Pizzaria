import React from "react";
import HeaderAdm from "../components/HeaderAdm";

function PedidosAdm() {
  return (
    <>
      <HeaderAdm />
      <div className="flex justify-center">
        <div className="container border border-black h-screen p-10 flex gap-5">
          <div>
            <h1 className="font-bold text-lg">Pedidos ativos prepanrando / em transito</h1>
            <div className="border border-black w-[30rem] h-[40rem] overflow-y-scroll p-3 ">
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-orange-500 "> </div>
                <p> refigerante </p>
                <p>obs</p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 54.50</p>
              </div>
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-orange-500 "> </div>
                <p> refigerante </p>
                <p>obs</p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 39.00</p>
              </div>
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-orange-500 "> </div>
                <p> refigerante </p>
                <p>obs</p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 26.90</p>
              </div>
            </div>
          </div>


          <div>
            <h1 className="font-bold text-lg">Pedidos finalizados / cancelados </h1>
            <div className="border border-black w-[30rem] h-[40rem] overflow-y-scroll p-3 ">

              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-green-500 "> </div>
                <p> refigerante </p>
                <p>obs</p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 95.87</p>
              </div>
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-red-500 "> </div>
                <p> refigerante </p>
                <p>obs </p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 16.87</p>
              </div>
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-green-500 "> </div>
                <p> refigerante </p>
                <p>obs</p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 65.87</p>
              </div>
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-green-500 "></div>
                <p> refigerante </p>
                <p>obs</p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 31.60</p>
              </div>
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-green-500 "> </div>
                <p> refigerante </p>
                <p>obs</p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 25.35</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-lg">Area de fazer o pedido </h1>
            <div className="border border-black w-[28rem] h-[50rem] overflow-y-scroll p-3 gap-3 flex flex-col">
              <input type="text " id='nomeUser' placeholder="Nome cliente" className=" border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" />
              <select placeholder="" className=" border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl">
                <option value="0">Escolha a pizza</option>
                <option value="1">pizza2</option>
                <option value="2">pizza3</option>
                <option value="3">pizza4</option>
                <option value="4">pizza5</option>
                <option value="5">pizza6</option>
              </select>
              <input type="text " id='obs' placeholder="Descrição do pedido" className=" border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" />
            </div>
          </div>


        </div>


      </div >
    </>
  )
}
export default PedidosAdm