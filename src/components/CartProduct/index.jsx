import { LiCart} from './style'
import { MdNoFood } from "react-icons/md";
export const  CartProduct = ({item, handleRemove}) => {
//se produto carinho == 0 false se nao 




return ( 
  <LiCart>
    <figure>
      <img src={item.img} alt="img" />
    </figure>
    <div className='content'>
      <div>
        <h3>{item.name}</h3>
          <div>0</div>
        <MdNoFood className='btnremove' id={item.id} onClick={()=> handleRemove(item)}/>
      </div>
      
      <span>{item.category}</span>
    </div>

  </LiCart>
    
  )
}

