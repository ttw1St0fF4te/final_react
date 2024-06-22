import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { CartContext } from '../contexts/CartContext';
import '../components/style/ProductInfoPage.css';

const ProductInfoPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToFavorites, removeFromFavorites, isInFavorites } = useContext(FavoritesContext);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:7779/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToFavorites = () => {
        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-info">
            <img src={product?.image} alt={product?.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Цена: ${product.price}</p>
            <button onClick={handleAddToFavorites}>
                {isInFavorites(product.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
        </div>
    );
};

export default ProductInfoPage;
