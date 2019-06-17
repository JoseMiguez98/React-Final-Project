import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';

const SearchInfo = props => (
    <section className="search-info">
                <h2 className="search-info-title title">Artists</h2>
                <p className="search-info-text text">You are currently searching: "{ props.search }"</p>
            
                <ul className="breadcrumb">
                    <li>
                        <NavLink 
                        exact to="/" 
                        activeClassName="active">Home</NavLink>
                    </li>
                    <li><NavLink exact to="/search" activeClassName="active">Artists</NavLink></li>
                </ul>
    </section>
);

export const SearchInfoRouter = withRouter(SearchInfo);