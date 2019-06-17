import React from 'react';
import './style.css';

const ArtistRow = props => (
    <li className="artist-row">
        <img alt={ props.name + "logo" } src={ props.logo } className="artist-logo" />
        <p className="artist-name text">{ props.name }</p>
    </li>
);

export default ArtistRow;