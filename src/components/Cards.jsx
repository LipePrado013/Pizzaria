import React, { useEffect, useState } from "react"
import './Cards.css'


function Cards() {
  const [produtos, setProdutos] = useState([]);

  function data() {
    fetch('http://localhost/api/pizzas')
      .then((Response) => Response.json())
      .then((json) => setProdutos(json))
  }

  useEffect(() => {
    data()
  }, []);
  return (
    <div className="w-full flex flex-wrap justify-center gap-5 p-10 ">
      {produtos.map((item) => (
        <div className="Mycard max-[600px]:w-40 hover:shadow-[0px_0px_15px_-3px_black] rounded-lg w-[15rem] h-[20rem] bg-white overflow-hidden flex flex-col hover:scale-105 transition-all ">
          <div >
            <img src={`src/assets/img/${item.img_pizza}`} className="w-full h-40" />
          </div>
          <div className="h-full flex flex-col p-3 justify-between">
            <div>
              <h1 className="font-bold text-2xl ">{item.nm_pizza}</h1>
              <p className="text-2xl">R$ {item.vl_pizza}</p>
            </div>
            <div>
              <a href="" className="font-bold hover:bg-green-400 bg-green-300 pl-6 pr-6 p-1  max-[600px]:p-2 rounded-xl">Adicionar <i class="fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards