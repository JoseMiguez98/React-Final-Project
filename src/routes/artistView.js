import React, { Component } from 'react';
import ArtistInfo from '../components/ArtistPage/ArtistInfo.js';
import AlbumList from '../components/ArtistPage/AlbumList.js';
import { BASE_URL } from '../api';
import queryString from 'query-string';
import Loader from 'react-loader-spinner';
import '../components/common/styles/loader.css';
import { connect } from 'react-redux';
import { addData, addAlbums } from '../redux/actions';
import { withRouter } from 'react-router-dom'

class ArtistView extends Component {
    constructor(props) {
        super(props);

        this.handleAlbumRowClick = this.handleAlbumRowClick.bind(this);
    }

    handleAlbumRowClick(evt) {
        if(evt.target.dataset.id) {
            localStorage.setItem("artist_name", this.props.data.name );
            this.props.history.push("/album?id=" + evt.target.dataset.id + "&artist=" + queryString.parse(this.props.location.search).id);
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
            this.props.addData(response);
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
            this.props.addAlbums(response.items);
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
                data={ this.props.data } />
            { this.props.albums !== null ?
            <AlbumList
            albums={ this.props.albums }
            handleRowClick={ this.handleAlbumRowClick } /> :
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


const mapDispatchToProps = dispatch => {
    return {
        addData: data => dispatch(addData(data)),
        addAlbums: data => dispatch(addAlbums(data))
    }
}

const mapStateToProps = state => {
    return {
        data: state.artist.data,
        albums: state.artist.albums
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistView));