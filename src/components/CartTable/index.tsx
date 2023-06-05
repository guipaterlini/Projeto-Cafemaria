import React, { useEffect} from "react"
// import { Container } from "./style";
import { listarCarrinho } from "../../services/MainApi/carrinho";
// import { baseAPI } from "../../services/MainApi/carrinho";



//MOCK PRODUCTS

interface CartTableProps {
    data: Produto;
    handleRemoveItem: (props: Produto) => void;
}
interface Produto {
    _id: string
    name: string
    category: string
    price: number
    quantity: number
  }
const CartTable = (props:CartTableProps, handleRemoveItem:CartTableProps)=>{
    
    
    // const [CarrinhoProdutos, setCarrinhoProdutos] = useState<CarrinhoProduto[]>([]);
    // useEffect(()=>{
    //     const getData =async () => {
    //         try {
    //             const response = await listarCarrinho();
    //             setCarrinho(response.data)                
    //         } catch (error) {
    //             alert ('algo deu errado')                
    //         }           
    //     };
    //     getData();
    // },[setCarrinho])        

    useEffect(()=>(console.log(props)))
    return (        
        <tr>
            <td>
                <div className="produto">
                    <div className="info">
                        <div className="nome">{props.data.name}</div>
                    </div>
                </div>
            </td>
                <td>{props.data.price}</td>
                <td>
                    <div className="quantidade">
                        <button>
                            <i> - </i>                        
                         </button>
                        <span>{props.data.quantity}</span>
                        <button>
                            <i> + </i>
                     </button>
                    </div>
                </td>
                <td>{(props.data.price)*(props.data.quantity)}</td>
                <td>
                    <button className="btn-remove-produto" onClick={()=>handleRemoveItem}>
                        <i> remover </i>
                    </button>
                </td>            
        </tr>
        )
    }
    
    export default CartTable


    // {cart.map(item=> <CartTable/>)}
    //             {cart.length === 0 && (
    //             <tr>
    //               <td colSpan={5} style={{textAlign: 'center'}}>
    //                 <b>Seu carrinho de compras está vazio.</b>
    //               </td>
    //             </tr> )}   