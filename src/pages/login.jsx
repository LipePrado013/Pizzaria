import { useState } from 'react'
import img from '../assets/img/bgLogin.png'

import axios from 'axios';
import { createBrowserRouter } from 'react-router-dom';

function Login() {

  const [troca, setTroca] = useState(true);
  const [users, setUsers] = useState([])

  function data() {
    fetch('http://localhost/api/users')
      .then((Response) => Response.json())
      .then((json) =>
        setProdutos(json).splice())
  }

  const [cadastro, setCadastro] = useState({
    nome: '',
    email: '',
    senha: '',
    csenha: ''
  });

  const [message, setMessage] = useState('');

  const valorI = e => setCadastro({ ...cadastro, [e.target.name]: e.target.value })

  const sendMsg = async e => {
    //nãop deixa a pagina recarregar
    e.preventDefault();


    const headers = {
      'headers': {
        'Content-Type': 'application/json'
      }
    }

    await axios.post('http://localhost:8080/message', cadastro, headers).then((response) => {
      setMessage(response.data.message);
      setCadastro({
        nome: '',
        email: '',
        senha: '',
        csenha: ''
      });

    }).catch((error) => {
      setMessage(error.response.data.message)
    })


  }

  return (
    <>
      <div className={`flex justify-center items-center w-screen h-screen bg-[url('${img}')] bg-no-repeat bg-cover`}>
        <div className=" w-[30rem] h-[40rem] fixed flex-col right-[15rem] flex justify-evenly  rounded-[20px] backdrop-blur-sm shadow-[0_0_20px]">
          {/* {
            message ? <p>{message}</p> : ''
          } */}
          <div className=" w-[30rem] rounded-t-lg z-10 p-1 gap-3 flex ml-5">
            <button onClick={() => setTroca(true)} className={`p-2 rounded-lg font-bold transition-all ${troca ? ('bg-blue-500 ') : ('text-white')}`}>Login</button>
            <button onClick={() => setTroca(false)} className={`p-2 rounded-lg font-bold transition-all ${troca ? ('text-white') : ('bg-blue-500 ')}  `}>Cadastro</button>
          </div>
          {troca ? (

            <div className=" w-[30rem] h-[25rem]  p-2 ">
              <form onSubmit={sendMsg} method="get" className="flex flex-col gap-5 items-center">
                <h1 className='text-5xl text-white font-bold mb-10'>Login</h1>
                <input type="text" name='email' id='email' placeholder="E-mail" className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl " />
                <input type="text" name='senha' id='senha' placeholder="Senha" className="p-1 rounded-lg  w-[15rem] h-[3rem] text-xl" />
                <button type='submit' className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg">Logar</button>
              </form>
              <a href='/adm' className='  absolute bottom-5 right-5 p-2 text-lg font-bold text-white'>adm</a>
            </div>
          ) : (
            <div className=" w-[30rem] h-[25rem]  p-2 ">
              <form onSubmit={sendMsg} method="get" className="flex flex-col gap-5 items-center">
                <h1 className='text-5xl text-white font-bold mb-10'>Cadastro</h1>
                <input type="text" placeholder="Nome" name='nome' className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl " onChange={valorI} value={cadastro.nome} />
                <input type="text" placeholder="E-mail" name='email' className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl" onChange={valorI} value={cadastro.email} />
                <input type="text" placeholder="Senha" name='senha' className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl" onChange={valorI} value={cadastro.senha} />
                <input type="text" placeholder="Confirmar senha" name='csenha' className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl" onChange={valorI} value={cadastro.csenha} />
                <button className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg">Cadastrar</button>
              </form>
            </div>
          )
          }
        </div>
      </div>
    </>
  )
}

export default Login