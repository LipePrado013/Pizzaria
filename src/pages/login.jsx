import img from '../assets/img/bgLogin.png'

function Login() {


  return (
    <>
      <div className={`flex justify-center items-center w-screen h-screen bg-[url('${img}')] bg-no-repeat bg-cover`}>
        <div className=" w-[30rem] h-[30rem] fixed right-[15rem] flex justify-center items-center rounded-[20px] backdrop-blur-sm shadow-[0_0_20px]">
          <form action="/home" method="get" className="flex flex-col gap-5 items-center">
            <h1 className='text-5xl text-white font-bold mb-10'>Login</h1>

            <input type="text" id='email' placeholder="E-mail" className="p-1 rounded-lg" />
            <input type="text" placeholder="Senha" className="p-1 rounded-lg" />

            <button className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg">Logar</button>

            <a href='/cadastrar' className="pt-2 pb-2 pl-10 pr-10  text-xl font-bold text-white rounded-lg">Cadastrar</a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login