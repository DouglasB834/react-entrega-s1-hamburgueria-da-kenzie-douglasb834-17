import { LiCart} from './style'
import { MdNoFood } from "react-icons/md";
import { useContext } from 'react';
import { ProductContext } from '../../Context';
export const  CartProduct = ({item, handleRemove}) => {

const {filteredProducts, setFilteredProducts} = useContext(ProductContext)
const remuveitem = (productId) =>{
  const newCart = filteredProducts.map((item) => {
    if (item.id === productId.id) {
      item.count -=1
      return item;
    }else{
      return item
    }        
  });
  const removerCart = newCart.filter(elemento=> elemento.count > 0)
  setFilteredProducts(removerCart)
}

return ( 
  <LiCart>
    <figure>
      <img src={item.img} alt="img" />
    </figure>
    <div className='content'>
      <div>
        <h3>{item.name}</h3>
          <div>{item.count}</div>
        <MdNoFood className='btnremove' id={item.id} onClick={()=> remuveitem(item)}/>
      </div>
      
      <span>{item.category}</span>
    </div>

  </LiCart>
    
  )
}

