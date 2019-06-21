import React, { Component } from 'react';
import AlbumInfo from '../components/AlbumPage/AlbumInfo.js';
import TrackList from '../components/AlbumPage/TrackList';
import { BASE_URL } from '../api';
import queryString from 'query-string';
import Loader from 'react-loader-spinner';

class AlbumView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const id = queryString.parse(this.props.location.search).id;
        const url = `${ BASE_URL }albums/${ id }`;
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

    render() {
        const { name, artists , id, release_date, images, tracks } = this.state.data;

        return (
            <article className="view-container">
                <AlbumInfo
                name={ name }
                artists= { artists }
                id_artist= { queryString.parse(this.props.location.search).artist }
                id_album={ id }
                year={ new Date(release_date).getFullYear() }
                images={ images }
                search={ localStorage.getItem("search") } />
                { tracks ?
                <TrackList tracks={ tracks.items } /> :
                <div className="loader-wrapper">
                    <Loader 
                    type="Circles"
                    color="#9e9"
                    width={100}
                    height={100} />
                </div> } 
            </article>
        );
    }
}

export default AlbumView;