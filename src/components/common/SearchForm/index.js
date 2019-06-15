import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = props => (
    <form id="search-form">
    <span className="search-icon-wrapper">
        <FontAwesomeIcon className="search-icon" icon={ faSearch } />
    </span>
        <input type="text" placeholder={ props.placeholder } />
    </form> 
);
    
export default SearchForm;