import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SearchInfo.css';

const SearchInfo = props => (
    <section className="search-info">
        <h2 className="search-info-title title">Artists</h2>
        <p className="search-info-text text">You are currently searching: "{ props.search }"</p>
        
        <ul className="breadcrumb">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li><NavLink to="/search" activeClassName="active">Artists</NavLink></li>
        </ul>
    </section>
);

export default SearchInfo;