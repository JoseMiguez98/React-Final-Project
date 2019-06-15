import React, { Component } from 'react';
import SearchInfo from '../../components/Search/SearchInfo'
import ArtistList from '../../components/Search/ArtistList';

class SearchView extends Component {
    render() {
        return (
            <article>
                <SearchInfo search="duki" />
                <ArtistList />
            </article>
        );
    }
}

export default SearchView;
