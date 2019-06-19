import React from 'react';
import './style.css';

const ArtistRow = props => {
    const { logo, name } = props;

   return (
    <li className="artist-row">
        <img alt={ name + " logo" } src={ logo.length > 0 ? logo[1].url : "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" } className="artist-logo" />
        <p className="artist-name text">{ name }</p>
    </li>
   )
};

const ArtistList = props => {
    const { artists } = props;
    return (
    <ul className="artist-list">
       { artists.length > 0 ? artists.map((artist, key) => {
        return <ArtistRow key={ key } logo={ artist.images } name={ artist.name }></ArtistRow>;
    }) : <p className="text">The search does not return results.</p> }
    </ul>
    )
}

export default ArtistList;