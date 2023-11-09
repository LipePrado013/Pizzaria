import React, { useEffect, useState } from "react"
import './Cards.css'

const CardsRefri = () => {

  const [produtos, setProdutos] = useState([]);

  function data() {
    fetch('http://localhost/api/refris')
      .then((Response) => Response.json())
      .then((json) =>
        setProdutos(json))
  }
  // console.log(produtos)
  useEffect(() => {
    data()
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-evenly gap-5 p-10 ">

      {produtos.map((item) => (
        <div className="Mycard hover:shadow-[0_0_15px_-5px_black] rounded-lg w-[15rem] h-[20rem] bg-white p-3 flex flex-col justify-evenly items-center hover:scale-110 transition-all">
          <img src={`src/assets/img/${item.img_refri}`} className="w-[10rem]" />
          <h1 className="font-bold text-lg">{item.nm_refri}</h1>
          <p className="text-2xl">{item.vl_refri}</p>
          <a href="" className="font-bold hover:bg-green-400 bg-green-300 pl-6 pr-6 p-1 rounded-xl">Adicionar <i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      ))}
    </div>
  )
}

export default CardsRefri