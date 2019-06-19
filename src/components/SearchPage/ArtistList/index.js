import React from 'react';
import ArtistRow from '../ArtistRow';
import './style.css';

const ArtistList = props => {
    const { artists } = props;
    return (
    <ul className="artist-list">
       { artists.length > 0 ? artists.map((artist, key) => {
        return <ArtistRow key={key} logo={ artist.images } name={artist.name}></ArtistRow>;
    }) : <p className="text">The search does not return results.</p> }
    </ul>
    )
}

export default ArtistList;