import React from 'react';
import Footer from './Footer';
import { HeaderRouter as Header } from './Header';
import { connect } from 'react-redux';
import { toggleSearch } from '../../redux/actions';

const Layout = props => (
    <div className="container">
        <Header 
            handleSearchClick={ props.toggleSearch }
            searchExpanded={ props.searchExpanded } />
            { props.children }
        <Footer/>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        toggleSearch: () => dispatch(toggleSearch())
    }
}

const mapStateToProps = state => {
    return {
        searchExpanded: state.layout.searchExpanded
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);