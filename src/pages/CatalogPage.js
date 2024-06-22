import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Search from '../components/Search';
import '../animations/fade-in.css';
import '../components/style/CatalogPage.css';

const CatalogPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:7779/products');
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedCategory === '' || product.category === selectedCategory)
        );
        setFilteredProducts(filtered);
    }, [searchQuery, selectedCategory, products]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div  className="fade-in">
            <div className="catalog-page">
                <Search onSearch={handleSearch} />
                <div className="filters">
                    <label>
                        Категория:
                        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
                            <option value="">Все категории</option>
                            <option value="Наушники">Мужская одежда</option>
                            <option value="Стереосистемы">Женская одежда</option>
                            <option value="МП3 плееры">Одежда для детей</option>
                            <option value="Микрофоны">Аксесуары</option>
                        </select>
                    </label>
                </div>
                <ProductList products={filteredProducts} />
            </div>
        </div>
    );
};

export default CatalogPage;
