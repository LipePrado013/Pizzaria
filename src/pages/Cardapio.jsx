import Header from "../components/Header"
import Cards from "../components/Cards"
import CardsRefri from "../components/CardsRefri"
import bannerBG from '../assets/img/banner-bg.png'
import bannerVertical from '../assets/img/banner-vertical.png'


function Cardapio() {
    const cardsData = [
        { img: 'src/assets/img/pizza1card.png', title: 'Pizza 4 queijos', valor: 'R$ 15.90' },
        { img: 'src/assets/img/pizza2card.png', title: 'Pizza quiejo', valor: 'R$ 17.40' },
        { img: 'src/assets/img/pizza3card.png', title: 'Pizza  frango e catupiry', valor: 'R$ 18.50' },
        { img: 'src/assets/img/pizza4card.png', title: 'Pizza carne queijo', valor: 'R$ 25.00' },
        { img: 'src/assets/img/pizza5card.png', title: 'Pizza peperoni', valor: 'R$ 11.50' },
        { img: 'src/assets/img/pizza6card.png', title: 'Pizza chocolate com morango', valor: 'R$ 12.10' },
        { img: 'src/assets/img/pizza7card.png', title: 'Pizza de ovo de codorna', valor: 'R$ 13.20' },
        { img: 'src/assets/img/pizza8card.png', title: 'Pizza  linguiça', valor: 'R$ 14.60' },
    ];
    
    const cardsDataRefri = [
        { img: 'src/assets/img/refrir1.png', title: 'Coca Cola 1.5L', valor: 'R$ 15.90' },
        { img: 'src/assets/img/refrir2.png', title: 'Guarana 1.5L', valor: 'R$ 12.90' }, 
        { img: 'src/assets/img/refrir3.png', title: 'Pepsi 1.5L', valor: 'R$ 15.90' }, 
        { img: 'src/assets/img/refrir4.png', title: 'IT guarana 1.5L', valor: 'R$ 10.90' }, 
        { img: 'src/assets/img/refrir5.png', title: 'Pepsi 1.5L Black', valor: 'R$ 12.90' }, 
        { img: 'src/assets/img/refrir6.png', title: 'Coca Cola 1.5L zero', valor: 'R$ 15.90' }, 
        { img: 'src/assets/img/refrir7.png', title: 'Guarana 1.5L zero', valor: 'R$ 15.90' }, 
    ];


    return (
        <>
            <Header />

            <div className="flex flex-col items-center pt-40 border border-black bg-slate-200">
                <div className=" container flex justify-center">
                    <Cards cardsData={cardsData} />
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
                    <CardsRefri cardsDataRefri={cardsDataRefri}/>
                </div>
            </div>
        </>
    )
}

export default Cardapio