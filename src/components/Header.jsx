import './Header.css'
import logoPizzaria from '../assets/img/logoPizzaria1.png'
import fatiaP from '../assets/img/fatiaPizzaR.png'
import cardapio from '../assets/img/cardapioR.png'
import user from '../assets/img/user.png'
import { useState } from 'react'


function Header() {
    const [clicked, setClicked] = useState(false)
    const onClick = () => setClicked(!clicked)


    return (
        <>
            <div className="z-50 w-full fixed bg-white h-32 flex items-end justify-around gap-5 p-5 text-black max-[966px]:justify-around max-[966px]:items-center max-[500px]:justify-between shadow-[0_-10px_25px_2px_black]">
                <div className=''>
                    <img src={logoPizzaria} width='100rem' />
                </div>

                <div className="flex gap-20 font-bold  max-[966px]:hidden">

                    <div className='Mynav overflow-hidden h-24 relative flex items-end justify-center '>
                        <a href="/" className='bg-white  pl-6 pr-6 rounded-lg z-10'>Inicio</a>
                        <img className='absolute -bottom-10 ' src={fatiaP} width='70rem' />{/* bottom-4*/}
                    </div>
                    {/* <div className='Mynav overflow-hidden h-24 relative flex items-end justify-center '>
                        <a href="#Refri" className='bg-white  pl-6 pr-6 rounded-lg z-10'>Bebidas</a>
                        <img className='absolute -bottom-10 ' src={refri} width='70rem' />
                    </div> */}
                    <div className='Mynav overflow-hidden h-24 relative flex items-end justify-center '>
                        <a href="/cardapio" className='bg-white  pl-6 pr-6 rounded-lg z-10'>Cardapio</a>
                        <img className='absolute -bottom-14 ' src={cardapio} width='70rem' />{/* bottom-4*/}
                    </div>
                    <div className='Mynav overflow-hidden h-24 relative flex items-end justify-center '>
                        <a href="" className='bg-white  pl-6 pr-6 rounded-lg z-10'>Cadastrar-se</a>
                        <img className='absolute -bottom-12 ' src={user} width='70rem' />{/* bottom-4*/}
                    </div>


                </div>

                <div className="flex text-3xl gap-7 max-[966px]:hidden">
                    <a href='' className='hover:text-gray-400 cursor-pointer'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                    <a href='/login' className='hover:text-green-500 cursor-pointer'>
                        <i className="fa-solid fa-circle-user"></i>
                    </a>

                </div>

                <button onClick={onClick} className='max-[966px]:block text-4xl hidden'><i className="fa-solid fa-bars"></i></button>


                <div className={`absolute bottom-[-12.7rem] right-0 max-[500px]:left-0 max-[500px]:w-full w-96 z-10 flex flex-col gap-5 items-center p-2 bg-white ${clicked == true ? 'flex' : 'hidden'} shadow-[0_30px_105px_-65px_black] transition-all`}>
                    <a href='' className='hover:bg-orange-500 active:bg-orange-500 w-full text-center font-bold hover:text-white transition-[1s] p-1'>Inicio</a>
                    <a href='' className='hover:bg-yellow-500 active:bg-yellow-500 w-full text-center font-bold hover:text-white transition-[1s] p-1'>Bebidas</a>
                    <a href='' className='hover:bg-red-500 active:bg-red-500 w-full text-center font-bold hover:text-white transition-[1s] p-1'>Cardapio</a>
                    <a href='' className='hover:bg-green-500 active:bg-green-500 w-full text-center font-bold hover:text-white transition-[1s] p-1'>Cadastrar-se</a>
                </div>
                <div className={`left-0 bg-[#00000a5d] fixed bottom-[-8rem] w-full h-full ${clicked == true ? 'opacity-1 pointer-events-all' : 'opacity-0 pointer-events-none'} transition-all`}></div>
            </div>

        </>
    )
}

export default Header