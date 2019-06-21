import React, { Component } from 'react';
import AlbumInfo from '../components/AlbumPage/AlbumInfo.js';
import { BASE_URL } from '../api';
import queryString from 'query-string';

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
                {/* <TrackList/> */}
            </article>
        );
    }
}

export default AlbumView;