import Header from "../components/Header"
import Cards from "../components/Cards"
import CardsRefri from "../components/CardsRefri"
import bannerBG from '../assets/img/banner-bg.png'
import bannerVertical from '../assets/img/banner-vertical.png'




function Cardapio() {




  return (
    <>
      <Header />


      <div className="flex flex-col items-center pt-40 border border-black bg-slate-200">
        <div className=" container flex justify-center">
          <Cards />
        </div>
        <div className={`border w-full bg-[url('${bannerBG}')] h-[45rem]  bg-fixed bg-bottom bg-no-repeat object-cover max-[700px]:bg-[url('${bannerVertical}')] bg-cover flex justify-center items-center`}>
          <h1 className="pl-32 pr-32 pt-5 pb-5  text-3xl font-bold backdrop-blur-[3px] bg-[#000000ad] text-white max-[774px]:text-xl max-[607px]:pl-20 max-[607px]:pr-20 max-[512px]:pl-10 max-[512px]:pr-10 max-[512px]:text-lg">As melhores pizzas você enconta aqui</h1>
        </div>
        <div className="container m-4 ">
          <div className="w-full text-center p-2 border-b-2 border-black">
            <h1 className="text-6xl font-bold w-full">Bebidas</h1>
          </div>
        </div>
        <div className=" w-full pl-4 pr-4 " id="Refri">

        </div>
      </div>
    </>
  )
}

export default Cardapio