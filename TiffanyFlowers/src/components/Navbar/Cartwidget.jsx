import React from 'react';

const Cartwidget = () => {
    return (
        <div className="navbar a">
            <a className="btn icono" href="/">
                <span id="cartCount">0</span><br/>
                <i className="fas fa-shopping-cart"></i>
            </a>
        </div>
    );
};

export default Cartwidget;
