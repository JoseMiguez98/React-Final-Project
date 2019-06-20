import React, { Component } from 'react';
import ArtistInfo from '../components/ArtistPage/ArtistInfo';
import AlbumList from '../components/ArtistPage/AlbumList.js';
import { BASE_URL } from '../api';
import queryString from 'query-string';
import Loader from 'react-loader-spinner';
import '../components/common/styles/loader.css';

class ArtistView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            albums: null
        }
    }

    getArtistInfo() {
        const id = queryString.parse(this.props.location.search).id;
        const url = `${ BASE_URL }artists/${id}`;
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
             data: response
             });
        });
    }

    getArtistAlbums() {
        const id = queryString.parse(this.props.location.search).id;
        const url = `${ BASE_URL }artists/${ id }/albums?country=AR`;
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
            console.log(response);
             this.setState({
             albums: response.items
             });
        });
    }

    componentDidMount() {
        this.getArtistInfo();
        this.getArtistAlbums();
    }

    render() {
       return (
       <article className="view-container">
            <ArtistInfo
                data={ this.state.data }
                search={ queryString.parse(this.props.location.search).q } />
            { this.state.albums !== null ?
            <AlbumList
            albums= { this.state.albums } /> :
            <div className="loader-wrapper">
                <Loader 
                type="Circles"
                color="#9e9"
                width={100}
                height={100} />
            </div> }     
       </article> );
    }
}

export default ArtistView;