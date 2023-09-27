import Header from "../components/Header"
import pizza from '../assets/img/meiapizza.png'
import garfoefaca from '../assets/img/garfoefaca.png'
import rolo from '../assets/img/rolo.png'
import './Home.css'

function Home() {

    return (
        <>
            <Header />

            <div className=" flex flex-col items-center pt-[8rem] h-screen text-white ">{/*container  */}
                <div className="flex justify-between w-full h-full bg-black overflow-hidden">

                    <div className=" w-[25%] flex ">
                        <img src={pizza} id="imgpizza" className="w-[100%]" />
                    </div>

                    <div className="  w-[45%] relative  border-white flex justify-center ">
                        <div className="shadow-[0_0_10px] absolute  top-44 w-[45%] h-[55%] rounded-2xl p-3 bg-[#b5b5b538] flex items-center overflow-hidden ">
                            <img src={garfoefaca} className="w-[90%] opacity-40"/>
                           <div className="absolute flex justify-around flex-col h-full">
                            <h2 className="text-8xl mb-4">Todas <br/>as quintas</h2>
                            <h3 className="text-6xl text-yellow-300">25% OFF</h3>
                           </div>
                        </div>
                    </div>
                    
                    <div className="w-[25%] ">
                        <img src={rolo}  className=" h-[110%] w-full -rotate-[45deg] object-cover" />
                    </div>

                </div>

                

            </div>{/*container fim */}
            <div className=" flex flex-col items-center h-screen pt-5">{/*container  */}
                <div className="container border border-black ">
                    oi
                </div>

            </div>{/*container fim */}
        </>
    )
}

export default Home