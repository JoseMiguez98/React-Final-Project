import React from 'react';
import { withRouter } from 'react-router-dom';
import BreadCrumb from '../common/BreadCrumb';

const SearchInfo = props => (
    <section className="search-info info-container">
        <h2 className="search-info-title title">Artists</h2>
        <p className="search-info-text text">You are currently searching: "{ props.search }"</p>

        <BreadCrumb items={[
            {
                name: "Home",
                href: "/"
            },
            {
                name: "Artists",
                href: props.history.location.pathname + props.history.location.search,
                isActive: true
            }
        ]}/>
    </section>
);

export const SearchInfoRouter = withRouter(SearchInfo);