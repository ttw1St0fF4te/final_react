import React from 'react';
import Favorites from "../components/Favorites";
import '../components/style/FavCartPages.css';

const FavoritesPage = () => {
    return (
        <div className="page-content">
            <h1 className="page-title">Избранное</h1>
            <Favorites />
        </div>
    );
};

export default FavoritesPage;