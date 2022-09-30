import { CartTotalStyle } from "./style"


export const CartTotal = ({filteredProducts, setFilteredProducts}) => {
const total = filteredProducts.reduce((acc,act) =>  acc+act.price * act.count ,0).toFixed(2).replace(".",",")
  return (
    <CartTotalStyle>

      <div className="valorTotal">
        <p>total</p>
        <span>R$ {total}</span>
      </div>

        <div>
            <button onClick={()=>setFilteredProducts([])} >Remover todos</button>
        </div>
    </CartTotalStyle>
  )
}
