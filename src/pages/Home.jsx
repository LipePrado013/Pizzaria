import Header from "../components/Header"
import Cards from "../components/Cards"
import img from '../assets/img/pizza1card.png'

function Home() {
    const cardsData = [
        { img: { img }, title: 'Pizza de ovo de codorna', valor: 'R$ 15.90' },
        { img: 'src/assets/img/pizza1card.png', title: 'Pizza de ovo de codorna', valor: 'R$ 15.90' },
        { img: 'src/assets/img/pizza1card.png', title: 'Pizza de ovo de codorna', valor: 'R$ 15.90' },
        { img: 'src/assets/img/pizza1card.png', title: 'Pizza de ovo de codorna', valor: 'R$ 15.90' },
        { img: 'src/assets/img/pizza1card.png', title: 'Pizza de ovo de codorna', valor: 'R$ 15.90' },
        { img: 'src/assets/img/pizza1card.png', title: 'Pizza de ovo de codorna', valor: 'R$ 15.90' },
        { img: 'src/assets/img/pizza1card.png', title: 'Pizza de ovo de codorna', valor: 'R$ 15.90' },
        { img: 'src/assets/img/pizza1card.png', title: 'Pizza de ovo de codorna', valor: 'R$ 15.90' }
    ];

    return (
        <>
            <Header />
            <div className="flex justify-center p-5 pt-40 ">
                <div className=" container flex justify-center">

                    <Cards cardsData={cardsData} />

                </div>
            </div>
        </>
    )
}

export default Home