import React, { Component } from 'react';
import Footer from './Footer';
import { HeaderRouter as Header } from './Header';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchExpanded: false
        }

        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch() {
        this.setState( prevState => {
            return {...prevState, ...prevState.searchExpanded = !prevState.searchExpanded};
        });
    }


    render() {
    return (<div className="container">
        <Header 
            handleSearchClick={ this.toggleSearch }
            searchExpanded={ this.state.searchExpanded } />
            { this.props.children }
        <Footer/>
    </div>)
    }
} 
   

export default Layout;