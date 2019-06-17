import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { SearchFormRouter as SearchForm } from '../common/SearchForm';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    
    render() {
        const { searchExpanded } = this.props;
        const { pathname } = this.props.location;
            
     return (
            <div>
                <header>
                    <img id="logo" src={ logo } alt="Spotify Logo"/>

                { pathname !== "/" ?
                    <button 
                    className="collapsible-search-button" 
                    onClick={ this.props.handleSearchClick } >
                    <FontAwesomeIcon className="angle-icon" icon={ searchExpanded ? faAngleUp : faAngleDown } />
                    <FontAwesomeIcon className="search-icon" icon={ faSearch } />
                </button>
                : "" }

                </header>

                { pathname !== "/" ?
                <div className={ searchExpanded ? "collapsible-search-bar visible" : "collapsible-search-bar" } >
                    <SearchForm
                        placeholder="Search for another artist"></SearchForm>
                </div> : "" }
                
           </div> );
    }
}

//Connect Header component to react router and then export
export const HeaderRouter = withRouter(Header);
