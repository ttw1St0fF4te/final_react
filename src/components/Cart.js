import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import './style/Cart.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart">
            {cart.length > 0 ? (
                cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Убрать</button>
                            <Link to={`/product/${item.id}`}>Информация</Link>
                        </div>
                    </div>
                ))
            ) : (
                <div className="cart-empty">
                    <h2>Корзина пуста</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;
