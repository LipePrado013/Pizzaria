import Header from "../components/Header"
import pizza from '../assets/img/pizza1card.png'
import pizza2 from '../assets/img/pizza2card.png'
import pizza3 from '../assets/img/pizza4card.png'

import { cardsData } from "./Cardapio"

import './Home.css'



function Home() {

    // var myIndex = 0;
    // carousel();

    // function carousel() {
    //     var i;
    //     var x = document.getElementsByClassName("mySlides");
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    //     myIndex++;
    //     if (myIndex > x.length) { myIndex = 1 }
    //     x[myIndex - 1].style.display = "block";
    //     setTimeout(carousel, 2000); // Change image every 2 seconds
    // }

    return (
        <>
            <Header />

            <div className={`pt-36 h-screen  flex flex-col items-center `}> {/* container  */}

                <div className=" flex container flex-wrap p-3 bg-gray-200"> {/* box top */}

                    <div className=" w-[50%] text-white flex flex-col gap-3 ">{/*  cardsStick*/}

                        {/* <h1 className="text-5xl text-black font-bold">Promoções</h1> */}

                        <div className="flex w-full relative">

                            <h1 className="titleH1 text-5xl font-bold absolute z-10">Promoções</h1>

                            {cardsData.map((card) => (
                                <>

                                    <div className={`cardStick bg-[url('${card.img}')] bg-cover bg-left overflow-hidden h-96 w-[100px]`}>
                                        <div className="Stick h-full flex flex-col justify-between bg-[#00000094] p-5 pt-12">
                                            <h1 className="title text-3xl w-[200px]">{card.title}</h1>
                                            <a href="#" className="title  w-32 text-center rounded-lg bg-[#8F0701] hover:bg-[#CF0801]">Comprar</a>

                                        </div>
                                    </div>

                                </>
                            ))}



                        </div>


                    </div>{/* fim cardsStick*/}

                    <div className="border w-[50%]">

                        {/* <div >
                            <img className="mySlides h-96 object-cover" src={pizza} width='100%' />
                            <img className="mySlides h-96 object-cover" src={pizza3} width='100%' />
                            <img className="mySlides h-96 object-cover" src={pizza2} width='100%' />
                        </div> */}

                    </div>

                </div> {/* box top fim*/}

                <div >
                    oi
                </div>

            </div > {/* container fim */}


        </>
    )
}

export default Home