import { useEffect, useState } from 'react';
import img from '../assets/img/bgLogin.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const history = useNavigate();
  const [troca, setTroca] = useState(true);
  const [msgInvalida, setMsgInvalida] = useState(false)
  const [showMessage, setShowMessage] = useState(false);

  /* AREA QUE FAZ VALIDAÇÃO */
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
          setMsgInvalida(true);
          setTimeout(() => setMsgInvalida(false), 2000);
          // Exibe uma  mensagem de erro
        }
      })
      .catch((error) => {
        console.error('Erro durante a requisição:', error);
      });
  };

  /* AREA QUE FAZ CADASTRO */
  const [formData, setFormData] = useState({
    nome: '',
    emailUser: '',
    senhaUser: '',
    csenhaUser: '',
    cep: '',
    bairro: '',
    rua: '',
    numero: '',
    cidade: '',
    estado: '',
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

        // Limpa os campos do formulário após o cadastro
        setFormData({
          nome: '',
          emailUser: '',
          senhaUser: '',
          csenhaUser: '',
          cep: '',
          bairro: '',
          rua: '',
          numero: '',
          cidade: '',
          estado: '',
        });
        // Exibe a mensagem de sucesso por 5 segundos
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);

      } else {
        console.error('Erro ao cadastrar usuário.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  /* AREA QUE FAZ CADASTRO */
  // Função que busca informações do CEP na API ViaCEP
  const handleCEPChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (response.ok) {
          const data = await response.json();
          // Preencha os campos do formulário com os dados do CEP
          setFormData((prevData) => ({
            ...prevData,
            bairro: data.bairro || '',
            rua: data.logradouro || '',
            cidade: data.localidade || '',
            estado: data.uf || '',
          }));
        } else {
          console.error('Erro ao buscar informações do CEP:', response.statusText);
        }
      } catch (error) {
        console.error('Erro durante a requisição:', error.message);
      }
    }
  };

  return (
    <>
      <div className={`flex justify-center items-center w-screen h-screen bg-[url('${img}')] bg-no-repeat bg-cover`}>


        <div className=' fixed right-[15rem]'>
          <div className=" relative">
            <div className=" w-[30rem] rounded-t-lg z-10 p-1 gap-3 flex ml-5 absolute top-3">
              <button onClick={() => setTroca(true)} className={`p-2 rounded-lg font-bold transition-all ${troca ? ('bg-blue-500 ') : ('text-white')}`}>Login</button>
              <button onClick={() => setTroca(false)} className={`p-2 rounded-lg font-bold transition-all ${troca ? ('text-white') : ('bg-blue-500 ')}  `}>Cadastro</button>
            </div>


            {msgInvalida && (
              <div className={`absolute -top-16 right-[25%] p-4 bg-red-500 text-white rounded-lg ${msgInvalida ? ('opacity-1') : ('none')} transition-[3s]`}>
                Dados invalidos
              </div>
            )}

            {troca ? (
              <>
                <div className=" w-[30rem] h-[40rem] flex-col right-[15rem] flex justify-evenly  rounded-[20px] backdrop-blur-sm shadow-[0_0_20px] ">
                  <div className="w-[30rem] h-[25rem] p-2">
                    <form onSubmit={handleSubmitee} className="flex flex-col gap-5 items-center">
                      <h1 className="text-5xl text-white font-bold mb-10">Login</h1>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl"
                        value={loginData.email}
                        onChange={handleChangee}
                        required
                      />
                      <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Senha"
                        className="p-1 rounded-lg w-[15rem] h-[3rem] text-xl"
                        value={loginData.senha}
                        onChange={handleChangee}
                        required
                      />

                      <button type="submit" className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg active:bg-[#318867]">
                        Logar
                      </button>

                    </form>
                    <a href="/adm" className="absolute bottom-5 right-5 p-2 text-lg font-bold text-white">
                      adm
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <><div className=" w-[30rem] h-[40rem]  flex-col right-[15rem] flex justify-evenly  rounded-[20px] backdrop-blur-sm shadow-[0_0_20px] ">
                <div className=" h-full p-4 items-center  justify-center flex flex-col">
                  <h1 className='text-5xl text-white font-bold mb-10'>Cadastro</h1>
                  <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-center  justify-evenly">

                    <input className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl " placeholder="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                    <input className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl " placeholder="E-mail" type="email" name="emailUser" value={formData.emailUser} onChange={handleChange} required />
                    <input className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl " placeholder="Senha" type="password" name="senhaUser" value={formData.senhaUser} onChange={handleChange} required />
                    <input className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl " placeholder="Confirmar senha" type="password" name="csenhaUser" value={formData.csenhaUser} onChange={handleChange} required />
                    <input
                      className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl"
                      placeholder="Cep"
                      maxLength={8}
                      type="text"
                      name="cep"
                      value={formData.cep}
                      onChange={(e) => {
                        setFormData((prevData) => ({
                          ...prevData,
                          cep: e.target.value,
                        }));
                        handleCEPChange(e);
                      }}
                      required
                    />
                    <input className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl " placeholder="Bairro" type="text" name="bairro" value={formData.bairro} onChange={handleChange} required />
                    <input className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl " placeholder="Rua" type="text" name="rua" value={formData.rua} onChange={handleChange} required />
                    <input className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl " placeholder="Número" type="number" name="numero" value={formData.numero} onChange={handleChange} required />
                    <input className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl " placeholder="Cidade" type="text" name="cidade" value={formData.cidade} onChange={handleChange} required />
                    <input className="p-1 rounded-lg w-[13rem] h-[3rem] text-xl " placeholder="Estado" type="text" name="estado" value={formData.estado} onChange={handleChange} required />
                    <button className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg active:bg-[#318867]" >Cadastrar</button>
                  </form>
                </div>
              </div>
              </>
            )}

            {showMessage && (
              <div className={`absolute -top-16 right-[25%] p-4 bg-green-500 text-white rounded-lg ${showMessage ? ('opacity-1') : ('none')} transition-[3s]`}>
                Cadastro realizado com sucesso!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
