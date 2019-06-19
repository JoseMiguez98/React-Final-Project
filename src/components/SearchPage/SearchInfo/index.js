import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.css';

const SearchInfo = props => (
    <section className="search-info">
                <h2 className="search-info-title title">Artists</h2>
                <p className="search-info-text text">You are currently searching: "{ props.search }"</p>

                {/*Si sobra tiempo abstraer breadcrumb a un componente*/}
                <ul className="breadcrumb">
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li><Link to={"/search?q=" + props.search} className="active">Artists</Link></li>
                </ul>
    </section>
);

export const SearchInfoRouter = withRouter(SearchInfo);