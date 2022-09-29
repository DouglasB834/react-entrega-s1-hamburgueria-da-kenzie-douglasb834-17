import { CartTotalStyle } from "./style"


export const CartTotal = ({filteredProducts}) => {
const total = filteredProducts.reduce((acc,act) =>  acc+act.price ,0).toFixed(2).replace(".",",")
  return (
    <CartTotalStyle>

      <div className="valorTotal">
        <p>total</p>
        <span>R$ {total}</span>
      </div>

        <div>
            <button>Remover todos</button>
        </div>
    </CartTotalStyle>
  )
}
