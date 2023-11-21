import Header from "../components/Header"
import banner from '../assets/img/banner-bg.png'
import fundoCard from '../assets/img/fundoCardsPizza.jpg'
import './Home.css'
import { useEffect, useState } from "react";


function Home() {

  const [produtos, setProdutos] = useState([]);

  function data() {
    fetch('http://localhost/api/pizzas')
      .then((Response) => Response.json())
      .then((json) =>
        setProdutos(json))
  }

  useEffect(() => {
    data()
  }, []);

  return (
    <>
      <Header />
      <div className={`pt-36 pb-10 flex flex-col items-center border-[10px] border-red-600`}> {/* container  */}
        <div className={`flex w-[96rem] h-[25rem] max-[1581px]:w-[65rem] max-[1070px]:w-[60rem] max-[1000px]:hidden flex-wrap justify-between bg-[url('${fundoCard}')] bg-cover gap-1 transition-all`}> {/* box top */}
          <div className=" w-full text-white flex flex-col gap-3 bg-[#00000049]">{/*  cardsStick*/}
            <div className="flex w-full relative h-full">
              <h1 className="titleH1 text-5xl font-bold absolute z-10">Promoções das quintas-feiras OFF-25%</h1>

              {produtos.map(pizza =>
                <div key={pizza.id_pizza} className=" w-28 h-[25rem] hover:w-full cardStick relative">
                  <img src={`src/assets/img/${pizza.img_pizza}`} className="w-full h-full object-cover absolute" />
                  <div className="Stick h-full w-full flex flex-col justify-between bg-[#00000094] p-5 pt-12 absolute">
                    <h1 className="title text-3xl w-[200px] z-20">{pizza.nm_pizza}</h1>
                    <a href="#" className="title  w-32 text-center rounded-lg bg-[#8F0701] hover:bg-[#CF0801]">Comprar</a>
                  </div>
                </div>
              )}
            </div>
          </div>{/* fim cardsStick*/}
        </div> {/* box top fim*/}
        <div className={`h-[35rem]  max-[1581px]:w-[65rem] max-[1070px]:hidden  container bg-[url('${banner}')] bg-cover transition-all`}>
        </div>
        <div className="border border-black ">
          continua
        </div>
      </div > {/* container fim */}
    </>
  )
}

export default Home