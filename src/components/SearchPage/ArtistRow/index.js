import React from 'react';
import './style.css';

const ArtistRow = props => {
    const {logo, name} = props;

   return (
    <li className="artist-row">
        <img alt={ name + " logo" } src={ logo.length > 0 ? logo[1].url : "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" } className="artist-logo" />
        <p className="artist-name text">{ name }</p>
    </li>
   )
};

export default ArtistRow;