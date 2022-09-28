
import {useEffect, useState } from 'react';
import './styles/index.css';
import { instance } from './service/instancia';
import { ProductContext } from './Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast =()=>{
  toast("passando uma msg ")
}

function App() {
  const [produtos, setProdutos] = useState([])
  // const [loading, setLoading] = useState()
  useEffect(()=>{
    //timeOut  loading false
    instance.get(`/products`)
    .then(({data}) =>{
      Toast()
       setProdutos(data)}
    
    )
    .catch(error => console.log(error))

  },[])

  console.log(produtos)
  return (
    <div>

    <main>
      <ProductContext.Provider value={{produtos, setProdutos}}>
      


      </ProductContext.Provider>     
    </main>
    <ToastContainer/>
    </div>
  );
}

export default App;
