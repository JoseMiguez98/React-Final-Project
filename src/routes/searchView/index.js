import React, { Component } from 'react';
import { SearchInfoRouter as SearchInfo } from '../../components/SearchPage/SearchInfo'
import ArtistList from '../../components/SearchPage/ArtistList';
import queryString from 'query-string';
import { BASE_URL } from '../../api';
import Loader from 'react-loader-spinner';
import './style.css';

class SearchView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: null,
            search: null
        }
    }

    search() {
        const search = queryString.parse(this.props.location.search).q;
        const url = `${ BASE_URL }search?q=${ search }&type=artist&limit=10`;
        const token = localStorage.getItem("access_token");

        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }
        }).then(response =>{
            return response.json()
        }).then(response => {
            this.setState({
                search,
                data: response.artists.items
            });
        });
    }

    componentDidMount() {
        this.search();
    }

    componentDidUpdate(prevProps) {
        let oldSearch = queryString.parse(prevProps.location.search).q;
        let newSearch = queryString.parse(this.props.location.search).q;

        // If the search query param change i update the componentn
        // otherwise it will fall on a infinite cylcle;

        if(oldSearch !== newSearch){
            this.search();
        }
    }

    render() {
        return (
            <article>
                <SearchInfo search={ this.state.search } />
                {this.state.data ? 
                <ArtistList artists={ this.state.data } /> :
                <div className="spinner-wrapper">
                <Loader
                 type="Circles"
                  color="#9e9"
                   width={100}
                    height={100} />
                    </div>}
            </article>
        );
    }
}

export default SearchView;
