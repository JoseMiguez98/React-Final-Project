import React from 'react';
import '../common/styles/elem-list.css';

const AlbumRow = props => {
   const { name, year, covers, id } = props;

   return (
    <li className="album-row" data-id={ id } onClick={ props.handleRowClick } >
        <img 
        alt={ name + " cover art" } 
        src={ covers && covers.length > 0 ? covers[1].url : "http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png" } 
        className="album-cover" />
        <p className="album-name text">{ name }</p>
        <p className="album-year text">{ year }</p>
    </li>
   );
}

const AlbumList = props => {
    const { albums } = props;

    return (
        <ul className="album-list">
            { albums && albums.length > 0 ? albums.map((album, key) => (
                <AlbumRow 
                name= { album.name }
                year= { new Date(album.release_date).getFullYear() }
                covers= { album.images }
                id= { album.id }
                key= {"Album: " + key}
                handleRowClick= { props.handleRowClick } />
            )):<p className="text">The artist has no albums</p>}
        </ul>
    );
}

export default AlbumList;