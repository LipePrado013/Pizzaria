import React from "react"
import { useEffect, useState } from "react"


function Produtos() {
    const [produtos, setProdutos] = useState([]);

    function data() {
        fetch('http://localhost/api/produtos').then((Response) => Response.json()).then((json) => setProdutos(json))
    }
    console.log(produtos)
    useEffect(() => {
        data()
    }, []);

    // produtos.map( produto => 
    //     {var img = `../assets/img/${produto.img_pizza}`} 
    // )  

    return (
        <div>
            <h1>api</h1>
            <a href="/">home</a>
            <br />
            <br />
            <br />
            <ul>
                {

                }
                {produtos.map(produto =>
                    <div className="w-[150px]">
                        {/* <img src={produto.img_pizza} className="w-full h-40"/> */}
                        <li>{produto.id_pizza}</li>
                        <img src={`src/assets/img/${produto.img_pizza}`} className="w-full h-40 object-cover" />
                        <li key={produto.id_pizza}>{produto.nm_pizza}</li>
                        <li >{produto.vl_pizza}</li>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Produtos