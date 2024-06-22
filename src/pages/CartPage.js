import React from 'react';
import Cart from '../components/Cart';
import '../components/style/FavCartPages.css';

const CartPage = () => {
    return (
        <div className="page-content">
            <h1 className="page-title">Корзина</h1>
            <Cart />
        </div>
    );
};

export default CartPage;