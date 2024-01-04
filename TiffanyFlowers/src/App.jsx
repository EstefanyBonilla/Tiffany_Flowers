import { useState,useEffect } from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/CartWidget/CartWidget'
import Button from './components/Button/Button'
import RenderProp from './components/RenderProp/RenderProp'
import Itemlist from './components/ItemList/ItemList'
import Item from './components/Item/Item'
import ItemCount from './components/ItemCount/ItemCount'
import Counter from './components/Counter/Counter'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Presentacion from './components/Presentacion/Presentacion'
import Cart from './components/Cart/Cart'
import Mensaje from './components/Mensaje/Mensaje'
import ThemeProvider from './context/ThemeProvider'
import Checkout from './components/Checkout/Checkout'
import { CartProvider } from './context/CartContext'
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore"



function App() {

  const [products,setProducts] = useState([])
  useEffect(()=> {

    const db = getFirestore()

    const q = query(
      collection(db,"productos"),
      where("categoria","==","PLANTAS DE INTERIOR")
    )
    getDocs(q).then((snapshot) => {
      setProducts(snapshot.docs.map((doc)=> (
        {id:doc.id,...doc.data()}
      )))
    })
  },[])
  
  console.log(products)

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Presentacion/>
        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}></Route>
          <Route path='*' element={<Error/>}/>

        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
