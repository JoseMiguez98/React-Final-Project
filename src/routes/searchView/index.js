import React, { Component } from 'react';
import { SearchInfoRouter as SearchInfo } from '../../components/SearchResults/SearchInfo'
import ArtistList from '../../components/SearchResults/ArtistList';
import queryString from 'query-string';

class SearchView extends Component {
    render() {
        // Get search value from query params. This allow user
        // access to search page directly from url and gives more
        // accesibility.
        const { q } = queryString.parse(this.props.location.search);

        return (
            <article>
                <SearchInfo search={ q } />
                <ArtistList />
            </article>
        );
    }
}

export default SearchView;
