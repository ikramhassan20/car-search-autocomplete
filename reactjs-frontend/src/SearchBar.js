import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import cars from './cars.json';

function SearchBar() {
    const handleOnSearch = (string, results) => {
        console.log(string, results);
    };

    const handleOnHover = (result) => {
        console.log(result);
    };

    const handleOnSelect = (item) => {
        console.log(item);
        return (
            item.name
        );

    };

    const handleOnFocus = () => {
        console.log("Focused");
    };

    const handleOnClear = () => {
        console.log("Cleared");
    };

    const formatResult = (item) => {
        console.log(item);
        return (
            <div className="result-wrapper">
                <span className="result-span">ID: {item.id}</span>
                <span className="result-span">Name: {item.name}</span>
                <span className="result-span">Price: {item.price}</span>
            </div>
        );
    };
    return (
        <div className="container">
            <h2>Car Models Search with Prices</h2>
            <h4>React Based Autocomplete Search</h4>
            <ReactSearchAutocomplete
                items={cars}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                onClear={handleOnClear}
                styling={{ zIndex: 1 }}
                formatResult={formatResult}
                autoFocus
            />
        </div>
    );
}

export default SearchBar;