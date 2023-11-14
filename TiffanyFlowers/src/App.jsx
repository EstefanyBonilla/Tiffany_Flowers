import { useState,useEffect } from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/Navbar/CartWidget'
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



function App() {
  
  return (

    <>

    <BrowserRouter>

    <Navbar/>

    <Presentacion/>

    <Routes>

      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>

    <Footer/>

    </BrowserRouter>

    </>
  )
}

export default App
