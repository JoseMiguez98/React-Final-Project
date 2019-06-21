import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
    }

    search(evt) {
        evt.preventDefault();
        const search = new FormData(evt.target).get("search").trim();
        if(search.length > 0) {
            localStorage.setItem("search", search);
            this.props.history.push("/search?q=" + search);
        }
    }

    render() {
       return (
        <form onSubmit={ this.search } id="search-form" autoComplete="off">
        <span className="search-icon-wrapper">
            <FontAwesomeIcon className="search-icon" icon={ faSearch } />
        </span>
            <input name="search" type="text" placeholder={ this.props.placeholder } />
        </form>   
       ) ;
    }
}
  

export const SearchFormRouter = withRouter(SearchForm);