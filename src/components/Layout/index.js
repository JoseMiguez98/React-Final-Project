import React from 'react';
import Footer from './Footer';
import { HeaderLocation as Header } from './Header';

const Layout = props => (
    <div className="container">
        <Header 
            handleSearchClick={ props.handleSearchClick }
            searchExpanded={ props.searchExpanded } />
            {props.children}
        <Footer/>
    </div>
);

export default Layout;