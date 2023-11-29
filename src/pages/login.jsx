import { useEffect, useState } from 'react';
import img from '../assets/img/bgLogin.png';
import { useNavigate } from 'react-router-dom';


function Login() {
  const history = useNavigate()
  const [troca, setTroca] = useState(true);


  const [loginData, setLoginData] = useState({
    emailUser: '',
    senhaUser: '',
  });

  const handleChangee = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitee = (e) => {
    e.preventDefault();

    // Adicione suas lógicas de validação aqui
    if (!loginData.email || !loginData.senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Lógica para enviar os dados do formulário (loginData) para o servidor
    fetch('http://localhost/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.ok) {
          // Se o login for bem-sucedido, redirecione para a página '/home'
          history('/home');
        } else {
          // Se o login falhar, trate o erro
          return response.json();
        }
      })
      .then((data) => {
        if (data && data.error) {
          alert(data.error); // Exibe uma mensagem de erro
        }
      })
      .catch((error) => {
        console.error('Erro durante a requisição:', error);
      });
  };


  const [formData, setFormData] = useState({
    nome: '',
    emailUser: '',
    senhaUser: '',
    csenhaUser: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/api/cadastarUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Cadastro realizado com sucesso:', responseData);
        useState({
          nome: '',
          emailUser: '',
          senhaUser: '',
          csenhaUser: '',
        });
      } else {
        console.error('Erro ao cadastrar usuário.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };
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

            <>
              <div className="w-[30rem] h-[25rem] p-2">
                <form onSubmit={handleSubmitee} className="flex flex-col gap-5 items-center">
                  <h1 className="text-5xl text-white font-bold mb-10">Login</h1>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl"
                    value={loginData.email}
                    onChange={handleChangee}
                  />
                  <input
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Senha"
                    className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl"
                    value={loginData.senha}
                    onChange={handleChangee}
                  />
                  <button type="submit" className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg">
                    Logar
                  </button>
                </form>
                <a href="/adm" className="absolute bottom-5 right-5 p-2 text-lg font-bold text-white">
                  adm
                </a>
              </div>
            </>
          ) : (
            <>
              <div className=" w-[30rem] h-[25rem]  p-2 ">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
                  <h1 className='text-5xl text-white font-bold mb-10'>Cadastro</h1>
                  <input className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl " placeholder="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange} />
                  <input className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl " placeholder="E-mail" type="text" name="emailUser" value={formData.emailUser} onChange={handleChange} />
                  <input className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl " placeholder="Senha" type="password" name="senhaUser" value={formData.senhaUser} onChange={handleChange} />
                  <input className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl " placeholder="Confirmar senha" type="password" name="csenhaUser" value={formData.csenhaUser} onChange={handleChange} />
                  <button className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg">Cadastrar</button>
                </form>
              </div>
            </>
          )
          }
        </div>
      </div >
    </>
  )
}

export default Login