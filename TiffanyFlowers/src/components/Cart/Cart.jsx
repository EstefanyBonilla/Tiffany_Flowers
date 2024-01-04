import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {

  const {cart,total,clearCart,removeItem} = useContext(CartContext)
  
  return (
    <div>
      <h1>Tu carrito de compras</h1>

      {
        cart.length == 0 ?
        <div>
          <h2>No hay productos en tu carrito de compras</h2>
          <Link to={"/"}>Ir a inicio</Link>
        </div>
        :
        <div>
          {
            cart.map((p) => (
              <CartItem key={p.producto.id} cartItem={p} removeItem={removeItem}/>
            ))
          }
          <h2>Total por pagar: ${total}</h2>
          <button onClick={()=>{clearCart()}}>Vaciar mi carrito de compras</button>
          <link to={"/Checkout"}>Terminar mi compra</link>
        </div>
      }
    </div>
  
  )








    // Componente que representa un elemento en el carrito
const CartItem = ({ product, onRemove }) => {
    return (
      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>
        <button onClick={() => onRemove(product.id)}>Eliminar</button>
      </div>
    );
  };

    return (
        <div>
           
        <h2>Carrito de compras</h2>
        {CartItem.map(item => (
        <CartItem key={item.id} product={item} onRemove={removeItem} />
        ))}
        <button onClick={clear
        }>Limpiar carrito</button>
        
    

        </div>
    );
};

export default Cart;

