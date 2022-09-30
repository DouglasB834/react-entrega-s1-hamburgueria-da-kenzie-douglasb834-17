import { useContext } from "react"
import { ProductContext } from "../../Context"
import { Product } from "../Product/Product"
import { Ulstyled } from "./style"


export const ProductsList =()=> {
  const {products} = useContext(ProductContext)
  return (
    <Ulstyled>   
      {
        products.map(item => <Product key={item.id} item={item} />)
      }
    </Ulstyled>
  )
}

