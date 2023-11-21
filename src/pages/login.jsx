import { useState } from 'react'
import img from '../assets/img/bgLogin.png'

function Login() {

  const [users, setUsers] = useState([])

  function data() {
    fetch('http://localhost/api/users')
      .then((Response) => Response.json())
      .then((json) =>
        setProdutos(json).splice())
  }

  console.log(users)

  const [troca, setTroca] = useState(true);

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function Entrar() {
    // Verifique se o email fornecido está na lista de usuários
    const user = users.find(userData => userData.cd_email === email);

    if (user) {
      // Se login bem sucedido, direciona para a página "Home"
      console.log('entrou', user)
    } else {
      //Se login estiver errado dará erro
      console.log('Email ou senha inválidos');
      alert('Email ou senha inválidos')
    }
  }

  return (
    <>
      <div className={`flex justify-center items-center w-screen h-screen bg-[url('${img}')] bg-no-repeat bg-cover`}>
        <div className=" w-[30rem] h-[40rem] fixed flex-col right-[15rem] flex justify-evenly  rounded-[20px] backdrop-blur-sm shadow-[0_0_20px]">
          <div className=" w-[30rem] rounded-t-lg z-10 p-1 gap-3 flex ml-5">
            <button onClick={() => setTroca(true)} className={`p-2 rounded-lg font-bold transition-all ${troca ? ('bg-blue-500 ') : ('text-white')}`}>Login</button>
            <button onClick={() => setTroca(false)} className={`p-2 rounded-lg font-bold transition-all ${troca ? ('text-white') : ('bg-blue-500 ')}  `}>Cadastro</button>
          </div>
          {troca ? (

            <div className=" w-[30rem] h-[25rem]  p-2 ">
              <form action="" method="get" className="flex flex-col gap-5 items-center">
                <h1 className='text-5xl text-white font-bold mb-10'>Login</h1>
                <input type="text " id='email' placeholder="E-mail" className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl" onChange={value => setEmail(value)} />
                <input type="text" id='senha' placeholder="Senha" className="p-1 rounded-lg  w-[15rem] h-[3rem] text-xl" />
                <button onClick={Entrar} className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg">Logar</button>
              </form>
              <a href='/adm' className='  absolute bottom-5 right-5 p-2 text-lg font-bold text-white'>adm</a>
            </div>
          ) : (
            <div className=" w-[30rem] h-[25rem]  p-2 ">
              <form action="/" method="get" className="flex flex-col gap-5 items-center">
                <h1 className='text-5xl text-white font-bold mb-10'>Cadastro</h1>
                <input type="text" placeholder="Nome" className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl " />
                <input type="text" placeholder="E-mail" className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl" />
                <input type="text" placeholder="Senha" className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl" />
                <input type="text" placeholder="Confirmar senha" className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl" />
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