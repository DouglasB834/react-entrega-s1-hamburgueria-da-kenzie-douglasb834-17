
import {useEffect, useState } from 'react';
import { instance } from './service/instancia';
import { ProductContext } from './Context';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/index.css';
import { ProductsList } from './components/ProductsList';

import { Header } from './components/Header';
import { Cart } from './components/Cart';
import Main from './components/Main/Main';

// const Toast =()=>{
//   toast("passando uma msg ")
// }

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [ search,  setSearch] = useState([])
  

  useEffect(()=>{
    //timeOut  loading false
    instance.get(`/products`)
    .then(res =>{
      setProducts(res.data)
      setSearch(res.data)      
    })
    .catch(error => console.log(error))
  },[])

  return (
    <div>
      <ProductContext.Provider value={{products, setProducts, filteredProducts,setFilteredProducts,  search,  setSearch}}>
    <div>
      <Header/>
      <Main>
        <ProductsList />
        <Cart/>        
      </Main>

    
    </div>
      </ProductContext.Provider>

    <ToastContainer/>
    </div>
  );
}

export default App;
