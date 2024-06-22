import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import myImage from './img/moe.png';

const Header = () => {
    return (
        <header className="header">
            <div>
                <Link to="/">
                    <img className='img' src={myImage} alt='xd'></img>
                </Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Каталог</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Избранное</Link>
                    </li>
                    <li>
                        <Link to="/cart">Корзина</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
