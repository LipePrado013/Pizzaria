import React from "react"

const Cards = ({cardsData}) => {

    return (
        <div className="w-full flex flex-wrap justify-evenly gap-5 p-4">
            
           {cardsData.map((card) => (
                <div className="w-[15rem] h-[20rem] border p-3 flex flex-col justify-evenly items-center hover:scale-110 transition-all">

                    <img src={card.img} className="w-[10rem]" />
                    <h1 className="font-bold text-lg">{card.title}</h1>
                    <p>{card.valor}</p>
                    <a href="" className="font-bold hover:bg-green-400 bg-green-300 pl-6 pr-6 p-1 rounded-xl">Adicionar <i class="fa-solid fa-cart-shopping"></i></a>

                </div>
            ))}
        </div>
    )
}

export default Cards