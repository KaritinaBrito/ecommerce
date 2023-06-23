import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>Lista de pedidos</h3>
                <div className="Checkout-item">
                    <div className="Checkout-element">
                        <h4>Item name</h4>
                        <span>$10</span>
                    </div>
                    <button type="button">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
            <div className="Checkout-sidebar">
                <h3>Precion total: $10</h3>
                <Link to="/information">
                    <button type="button" >Continuar pedido</button>
                </Link>
            </div>
        </div>
    );
}

export default Checkout;