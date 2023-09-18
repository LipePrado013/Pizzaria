import Header from "../components/Header"
import pizza from '../assets/img/meiapizza.png'
import './Home.css'

function Home() {

    return (
        <>
            <Header />

            <div className="flex flex-col items-center pt-[8rem] bg-[#181818] h-full text-white">
                <div className="flex justify-between w-full">

                    <div className=" w-[25%] flex ">
                        <img src={pizza} id="imgpizza" className="w-[100%]" />
                    </div>
                    <div className=" border-black w-[75%] relative">
                        <div className="shadow-[0_0_10px] absolute left-32 top-44 w-[35%] h-[45%] rounded-2xl p-3 bg-[#b5b5b538] flex justify-center items-center">

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home