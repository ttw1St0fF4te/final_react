import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {FavoritesProvider} from "./contexts/FavoritesContext";
import CartProvider from "./contexts/CartContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import Footer from "./components/Footer";

const App = () => {
  return (
      <Router>
        <FavoritesProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductInfoPage />} />
            </Routes>
            <Footer />
          </CartProvider>
        </FavoritesProvider>
      </Router>
  );
};
export default App;