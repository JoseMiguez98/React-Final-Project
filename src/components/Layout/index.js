import React from 'react';
import Footer from './Footer';
import { HeaderRouter as Header } from './Header';

const Layout = props => (
    <div className="container">
        <Header 
            handleSearchClick={ props.handleSearchClick }
            handleFormSubmit={ props.handleFormSubmit }
            searchExpanded={ props.searchExpanded } />
            { props.children }
        <Footer/>
    </div>
);

export default Layout;