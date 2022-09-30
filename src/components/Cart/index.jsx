
import { useContext } from "react"
import { toast } from "react-toastify"
import { ProductContext } from "../../Context"
import { CartProduct } from "../CartProduct"
import {CartTotal} from "../CartTotal"
import { DivCart, DivCartEmpty, UlCart } from "./style"


export const Cart = () => {

  const Toast =()=>{
    toast.success("removido com sucesso",{
      autoClose: 400,
    })
  }

  const {filteredProducts, setFilteredProducts} = useContext(ProductContext)
  
  //função de rmeover
   const handleRemove =(item)=>{  
     const removeItem = filteredProducts.filter(element =>{
      // Toast()
      return element !== item
     }) 
     setFilteredProducts(removeItem)
  }

  return (
    <DivCart>
      <div className="title2">
        <h2>Carinho de compras </h2>
       
      </div>
      { filteredProducts.length > 0 ? (
        <>
          <UlCart >        
          {
            filteredProducts.map((item, i)=> <CartProduct key={item.id}  item={item} handleRemove={handleRemove}/>)
          }
        
        </UlCart>

        <CartTotal filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
        </>

      ):(
        <DivCartEmpty>
          <h2>Sua sacola está vazia</h2>
          <p>Adicine itens</p>
        </DivCartEmpty>
      )

    }
      
    </DivCart>
  )

}

