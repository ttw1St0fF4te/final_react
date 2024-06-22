import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

const ProductList = ({ limit }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:7779/products');
                setProducts(response.data.slice(0, limit));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [limit]);

    return (
        <div className="product-list">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;