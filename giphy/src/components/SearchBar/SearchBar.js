import React from 'react';
import './SearchBar.css';

import { fetchGifs } from '../fetchGifs/fetchGifs';

const SearchBar = ({ setResults }) => {

    const onSearch = (event) => {
        if (event.keyCode === 13) {
            fetchGifs(event.target.value)
                .then(result => {
                    console.log(result);
                    setResults(result.data);
                });
        }

    }

    return (
        <div className="SearchBar">
            <input className="SearchBar__Input" type="search" onKeyUp={onSearch}></input>
        </div>
    );

}

export { SearchBar };