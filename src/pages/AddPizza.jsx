import React from "react";
import HeaderAdm from "../components/HeaderAdm";
import addImg from '../assets/img/pizza4card.png'

function AddPizza() {

  return (
    <>
      <HeaderAdm />
      <div className="flex justify-center items-center p-2">
        <div className="border border-black w-[60rem] p-3 flex gap-3 relative">
          <div className="border border-black w-[10rem] h-[10rem] cursor-pointer ">
            <img src={addImg} className="w-full h-full object-cover" />
          </div>
          <input type="text " id='nmPizza' placeholder="Nome da pizza" className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl border border-black" />
          <input type="text " id='vlPizza' placeholder="Valor da pizza" className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl border border-black" />
          <button className=" absolute p-2 text-center right-5 bottom-5 rounded-lg bg-green-400 font-bold text-xl active:bg-green-900 active:text-white transition-all">
            cadatrar
          </button>
        </div>
      </div>
    </>
  )
}
export default AddPizza