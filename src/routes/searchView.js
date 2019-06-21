import React, { Component } from 'react';
import { SearchInfoRouter as SearchInfo } from '../components/SearchPage/SearchInfo.js'
import ArtistList from '../components/SearchPage/ArtistList.js';
import queryString from 'query-string';
import { BASE_URL } from '../api';
import Loader from 'react-loader-spinner';
import '../components/common/styles/loader.css';
import { connect } from 'react-redux';
import { addResult } from '../redux/actions';
import { withRouter } from 'react-router-dom';

class SearchView extends Component {
    constructor(props) {
        super(props);

        this.handleArtistRowClick = this.handleArtistRowClick.bind(this);
    }

    handleArtistRowClick(evt) {
        if(evt.target.dataset.id){
            this.props.history.push("/artist?id=" + evt.target.dataset.id);
        }
    }

    search() {
        const search = queryString.parse(this.props.location.search).q;
        const url = `${ BASE_URL }search?q=${ search }&type=artist`;
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
            this.props.addResult(response.artists.items);
        });
    }

    componentDidMount() {
        this.search();
    }

    componentDidUpdate(prevProps) {
        let oldSearch = queryString.parse(prevProps.location.search).q;
        let newSearch = queryString.parse(this.props.location.search).q;

        // If the search query param change i update the component
        // otherwise it will fall on a infinite cylcle;

        if(oldSearch !== newSearch){
            this.search();
        }
    }

    render() {
        return (
            <article className="view-container">
                <SearchInfo />
                {this.props.data ? 
                <ArtistList 
                artists={ this.props.data }
                handleRowClick={ this.handleArtistRowClick } /> :
                <div className="loader-wrapper">
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

const mapDispatchToProps = dispatch => {
    return {
        addResult: data => dispatch(addResult(data))
    }
}

const mapStateToProps = state => {
    return {
        data: state.search.data
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchView));