import Header from "../components/Header"
import banner from  '../assets/img/banner-bg.png'
import fundoCard from '../assets/img/fundoCardsPizza.jpg'

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

            <div className={`pt-36 pb-10 flex flex-col items-center border-4 border-red-600`}> {/* container  */}

                <div className={`flex w-[96rem] h-[25rem] max-[1581px]:w-[65rem] max-[1070px]:hidden flex-wrap justify-between bg-[url('${fundoCard}')] bg-cover gap-1 transition-all`}> {/* box top */}

                    <div className=" w-full text-white flex flex-col gap-3 bg-[#00000049]">{/*  cardsStick*/}

                        {/* <h1 className="text-5xl text-black font-bold">Promoções</h1> */}

                        <div className="flex w-full relative h-full">

                            <h1 className="titleH1 text-5xl font-bold absolute z-10">Promoções das quintas-feiras OFF-25%</h1>

                            {cardsData.map((card) => (
                                <>

                                    <div className={`cardStick bg-[url('${card.img}')] bg-cover bg-left overflow-hidden w-[100px]`}>
                                        <div className="Stick h-full flex flex-col justify-between bg-[#00000094] p-5 pt-12">
                                            <h1 className="title text-3xl w-[200px]">{card.title}</h1>
                                            <a href="#" className="title  w-32 text-center rounded-lg bg-[#8F0701] hover:bg-[#CF0801]">Comprar</a>
                                        </div>
                                    </div>

                                </>
                            ))}
                            

                        </div>


                    </div>{/* fim cardsStick*/}

                </div> {/* box top fim*/}

                <div className={`h-[35rem]  max-[1581px]:w-[65rem] max-[1070px]:hidden border border-black container bg-[url('${banner}')] bg-cover transition-all`}>
                </div>
                      
                <div className="border border-black ">
                                
                                
                </div>

                
            </div > {/* container fim */}


        </>
    )
}

export default Home