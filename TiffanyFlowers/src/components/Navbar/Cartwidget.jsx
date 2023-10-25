import React from 'react';

const Cartwidget = () => {
    return (
        <div className="cart">
            <a className="btn icono" href="./pages/carrito.html">
                <span id="cartCount">0</span><br/>
                <i className="fas fa-shopping-cart"></i>
            </a>
        </div>
    );
};

export default Cartwidget;
