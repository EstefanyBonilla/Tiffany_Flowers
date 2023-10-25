// import myLogo from "./assets/logo.jpg"
// import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Itemlistcontainer from './components/ItemListContainer/Itemlistcontainer'
import Cartwidget from './components/Navbar/Cartwidget'

function App() {
  const enlaces = [
    "PLANTAS DE INTERIOR",
    "PLANTAS DE EXTERIOR", 
    "RAMOS", 
    "MACETAS", 
    "FLOREROS"
  ]

  const greeting = "Nunca es tarde para un detalle..."

  return (
    <>
      <Navbar links={enlaces}/>
      <Cartwidget />
      <Itemlistcontainer mensaje={greeting}/>
    </>
  )
}

export default App
