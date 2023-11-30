import React, { useEffect, useState } from "react";
import HeaderAdm from "../components/HeaderAdm";

function PedidosAdm() {
  // Estados para armazenar dados das pizzas, refrigerantes, pedidos, valor total e formulário
  const [pizzas, setPizzas] = useState([]);
  const [refris, setRefris] = useState([]);
  const [pizzasSelecionadas, setPizzasSelecionadas] = useState([]);
  const [refriSelecionado, setRefriSelecionado] = useState(null);
  const [totalValue, setTotalValue] = useState(0);

  // Função para obter dados das pizzas da API
  function Pizzas() {
    fetch('http://localhost/api/pizzas')
      .then((Response) => Response.json())
      .then((json) => setPizzas(json))
  }

  // Função para obter dados dos refrigerantes da API
  function Refris() {
    fetch('http://localhost/api/refris')
      .then((Response) => Response.json())
      .then((json) => setRefris(json))
  }

  // Efeito que executa Pizzas() e Refris() quando o componente é montado
  useEffect(() => {
    Pizzas();
    Refris();
  }, []);

  // Função para lidar com a mudança de uma pizza selecionada
  const handlePizzaChange = (e, index) => {
    const pizzaId = e.target.value;
    const selectedPizza = pizzas.find((pizza) => pizza.id_pizza === pizzaId);
    const updatedPizzas = [...pizzasSelecionadas];
    updatedPizzas[index] = selectedPizza;
    setPizzasSelecionadas(updatedPizzas);
    updateTotalValue(updatedPizzas, refriSelecionado);
  };

  // Função para lidar com a mudança de um refrigerante selecionado
  const handleRefriChange = (e) => {
    const refriId = e.target.value;
    const selectedRefri = refris.find((refri) => refri.id_refri === refriId);
    setRefriSelecionado(selectedRefri);
    updateTotalValue(pizzasSelecionadas, selectedRefri);
  };

  // Função para adicionar uma nova pizza à lista de pedidos
  const handleAddPizza = () => {
    setPizzasSelecionadas([...pizzasSelecionadas, null]);
  };

  // Função para atualizar o valor total com base nas pizzas e refrigerante selecionados
  const updateTotalValue = (selectedPizzas, refri) => {
    let total = 0;
    selectedPizzas.forEach((pizza) => {
      if (pizza) {
        total += parseFloat(pizza.vl_pizza);
      }
    });
    if (refri) {
      total += parseFloat(refri.vl_refri);
    }
    setTotalValue(total);
  };

  // Estados para armazenar dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    obs: '',
    cep: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
  });

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com a mudança no campo de CEP e obter informações do CEP
  const handleCEPChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, ' '); // Remove caracteres não numéricos

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (response.ok) {
          const data = await response.json();
          // Preencher os campos do formulário com os dados do CEP
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
      <HeaderAdm />
      <div className="flex justify-center">
        <div className="container border border-black  p-10 flex gap-5">



          <div>
            <h1 className="font-bold text-lg">Pedidos ativos prepanrando / em transito</h1>
            <div className="border border-black w-[30rem] h-[40rem] overflow-y-scroll p-3 ">
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-orange-500 "> </div>
                <p> refigerante </p>
                <p>obs</p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 54.50</p>
              </div>

            </div>
          </div>

          <div>
            <h1 className="font-bold text-lg">Pedidos finalizados / cancelados </h1>
            <div className="border border-black w-[30rem] h-[40rem] overflow-y-scroll p-3 ">
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-green-500 "> </div>
                <p> refigerante </p>
                <p>obs</p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 95.87</p>
              </div>
              <div className="border border-black p-2 rounded-md m-2 relative">
                <h1> nome da pizza 2x</h1><div className=" absolute right-10 w-[1rem] h-[1rem] rounded-3xl bg-red-500 "> </div>
                <p> refigerante </p>
                <p>obs </p>
                --------------------------------------------------------------
                <p>endereço</p>
                <p>Total: 16.87</p>
              </div>
            </div>
          </div>



          <div>
            <h1 className="font-bold text-lg">Area de fazer o pedido </h1>
            <div className="border relative border-black w-[28rem] h-[40rem] overflow-y-scroll p-3 gap-3 flex flex-col">
              <input type="text" name="nome" placeholder="Nome do cliente" className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" onChange={handleChange} />

              {/* Mapear as pizzas selecionadas e renderizar os campos de seleção */}
              {pizzasSelecionadas.map((selectedPizza, index) => (
                <select key={index} onChange={(e) => handlePizzaChange(e, index)} className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl">
                  <option value="0">Escolha a pizza</option>
                  {pizzas.map((item) => (
                    <option key={item.id_pizza} value={item.id_pizza}>
                      {item.nm_pizza} - R$ {item.vl_pizza}
                    </option>
                  ))}
                </select>
              ))}

              <button onClick={handleAddPizza} className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl">
                Adicionar Pizza
              </button>

              <select onChange={handleRefriChange} className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl">
                <option value="0">Escolha a bebida</option>
                {refris.map((item) => (
                  <option key={item.id_refri} value={item.id_refri}>
                    {item.nm_refri} - R$ {item.vl_refri}
                  </option>
                ))}
              </select>

              <input className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" placeholder="Cep" maxLength={8} type="text" name="cep" value={formData.cep} onChange={(e) => { setFormData((prevData) => ({ ...prevData, cep: e.target.value, })); handleCEPChange(e); }} required />
              <input className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" placeholder="Bairro" type="text" name="bairro" value={formData.bairro} onChange={handleChange} required />
              <input className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" placeholder="Rua" type="text" name="rua" value={formData.rua} onChange={handleChange} required />
              <input className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" placeholder="Número" type="number" name="numero" value={formData.numero} onChange={handleChange} required />
              <input className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" placeholder="Complemento" type="text" name="complemento" value={formData.complemento} onChange={handleChange} required />
              <input className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" placeholder="Cidade" type="text" name="cidade" value={formData.cidade} onChange={handleChange} required />
              <input className="border border-black p-1 rounded-lg w-[15rem] h-[3rem] text-xl" placeholder="Estado" type="text" name="estado" value={formData.estado} onChange={handleChange} required />
              <button className="pt-2 pb-2 pl-10 pr-10 bg-[#12FFA3] text-xl rounded-lg active:bg-[#318867]" >Fazer pedido</button>

              {/* Exibir o valor total */}
              <p className="text-4xl fixed bottom-14  bg-white">Total: R$ {totalValue}</p>
              {/* {totalValue && (
                <p className="text-5xl">Total: R$ {totalValue}</p>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PedidosAdm;

