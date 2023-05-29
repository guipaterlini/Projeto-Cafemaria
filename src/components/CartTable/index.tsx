import React, { useEffect, useState } from "react"
import { listarCarrinho } from "../../services/MainApi/carrinho";

interface CarrinhoProduto {
    id: string
    cart_id: string
    product_id: string
    product_quantity: number
    product_price: number
    product_name: string
}


export default function CartTable(){
    const [CarrinhoProdutos, setCarrinho] = useState<CarrinhoProduto[]>([]);
    useEffect(()=>{
        const getData =async () => {
            try {
                const response = await listarCarrinho();
                setCarrinho(response.data)                
            } catch (error) {
                alert ('algo deu errado')                
            }           
        };
        getData();
    },[setCarrinho])
    return (        
        <tr>
            {CarrinhoProdutos.map((produto)=>(
                                                
                <><td>
                    <div className="produto">
                        <div className="info">
                            <div className="nome">{produto.product_name}</div>
                        </div>
                    </div>
                </td>
                <td>{produto.product_price}</td>
                <td>
                    <div className="quantidade">
                        <button>
                            <i> - </i>                        
                         </button>
                        <span>{produto.product_quantity}</span>
                        <button>
                            <i> + </i>
                     </button>
                    </div>
                </td>
                <td>{(produto.product_price)*(produto.product_quantity)}</td>
                <td>
                    <button className="btn-remove-produto">
                        <i> remover </i>
                    </button>
                </td>
                </>               
                 
            ))}
        </tr>
        );
    };          


    // {cart.map(item=> <CartTable/>)}
    //             {cart.length === 0 && (
    //             <tr>
    //               <td colSpan={5} style={{textAlign: 'center'}}>
    //                 <b>Seu carrinho de compras está vazio.</b>
    //               </td>
    //             </tr> )}   