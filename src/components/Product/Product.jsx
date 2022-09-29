import { useContext} from "react"
import { toast } from "react-toastify"
import { ProductContext } from "../../Context"
import { DivStyle, Li } from "./style"


export const Product = ({item}) => {

  const {filteredProducts,setFilteredProducts} =useContext(ProductContext)

  const Toast =()=>{
    toast.success(`Item adicionado`,{
      autoClose: 600,
    })
  }

//função de add produto 

  const handleClick =(productId)=>{
    
    Toast()
    setFilteredProducts( [...filteredProducts, productId])
  }


  return (
    <Li>

      <DivStyle>
        <figure>
          <img src={item.img} alt={item.name} />
        </figure>

        <div className="boxContent">
        <h2>{item.name}</h2>
        <span  >{item.category}</span>

        <p className="headline" >R$ {`${item.price.toFixed(2).replace(".",",")}`}</p>
        <div>
           <button id={item.id}  className="btnText" onClick={()=> handleClick(item)} >Adicionar</button>
        </div>
        </div>
      </DivStyle>
    </Li>
  )
}


