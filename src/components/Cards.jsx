import React from "react"
import './Cards.css'


const Cards = ({ cardsData }) => {

    return (
        <div className="w-full flex flex-wrap justify-center max-[]:   border   gap-5 p-10 ">


            {cardsData.map((card) => (
                <div className="Mycard max-[600px]:w-40 hover:shadow-[0px_0px_15px_-5px_black] rounded-lg w-[15rem] h-[20rem] bg-white overflow-hidden flex flex-col hover:scale-110 transition-all ">
                    <div >
                        <img src={card.img} className="w-full h-40"/>
                    </div>
                    <div className="h-full flex flex-col p-3 justify-between">
                        <div>
                            <h1 className="font-bold text-2xl ">{card.title}</h1>
                            <p className="text-2xl">{card.valor}</p>
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