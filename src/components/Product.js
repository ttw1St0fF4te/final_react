import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { CartContext } from '../contexts/CartContext';
import './style/Product.css';
import '../animations/flash.css';

const Product = ({ product }) => {
    const { addToFavorites, removeFromFavorites, isInFavorites } = useContext(FavoritesContext);
    const { addToCart } = useContext(CartContext);
    const productRef = useRef(null);

    const handleAddToFavorites = () => {
        productRef.current.classList.add('flash');
        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const handleAddToCart = () => {
        productRef.current.classList.add('flash');
        addToCart(product);
    };

    const handleAnimationEnd = () => {
        productRef.current.classList.remove('flash');
    };

    return (
        <div className="product" ref={productRef} onAnimationEnd={handleAnimationEnd}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: ${product.price}</p>
            <button onClick={handleAddToFavorites}>
                {isInFavorites(product.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
            <Link to={`/product/${product.id}`}>Подробнее</Link>
        </div>
    );
};

export default Product;
