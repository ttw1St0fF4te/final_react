import React, { useState } from 'react';
import '../components/style/Search.css';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Поиск..."
                value={query}
                onChange={handleInputChange}
            />
            <button type="submit">Поиск</button>
        </form>
    );
};

export default Search;
