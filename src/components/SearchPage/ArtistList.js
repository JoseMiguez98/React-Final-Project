import React from 'react';
import '../common/styles/elem-list.css';

const ArtistRow = props => {
    const { logo, name, id } = props;

   return (
    <li data-id={ id } className="artist-row" onClick={ props.handleRowClick }>
        <img alt={ name + " logo" } src={ logo.length > 0 ? logo[0].url : "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" } className="artist-logo" />
        <p className="artist-name text">{ name }</p>
    </li>
   )
};

const ArtistList = props => {
    const { artists } = props;
    return (
    <ul className="artist-list">
       { artists.length > 0 ? artists.map((artist, key) => {
        return <ArtistRow 
                key={"Artist:" + key } 
                id={ artist.id } 
                logo={ artist.images } 
                name={ artist.name }
                handleRowClick={ props.handleRowClick }></ArtistRow>;
    }) : <p className="text">The search does not return results.</p> }
    </ul>
    )
}

export default ArtistList;