import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { Link } from 'react-router-dom';
import './style/Favorites.css';

const Favorites = () => {
    const { favorites, removeFromFavorites } = useContext(FavoritesContext);

    return (
        <div className="favorites">
            {favorites.length > 0 ? (
                favorites.map(item => (
                    <div className="favorites-item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="favorites-item-info">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromFavorites(item.id)}>Убрать</button>
                            <Link to={`/product/${item.id}`}>Информация</Link>
                        </div>
                    </div>
                ))
            ) : (
                <div className="favorites-empty">
                    <h2>Здесь ничего нет</h2>
                </div>
            )}
        </div>
    );
};

export default Favorites;
