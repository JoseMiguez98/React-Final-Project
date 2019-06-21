import React from 'react';
import '../common/styles/info-container.css';
import BreadCrumb from '../common/BreadCrumb';
import Loader from 'react-loader-spinner';

const AlbumInfo = props => {
    let { images: covers, name, artists, id_artist, id_album, year } = props;
    console.log(id_album);

    return (
    <section className="album-info info-container">
        <figure className="album-info-cover">
            <img 
            src={ covers && covers.length > 0 ? covers[1].url : "http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png" } 
            alt={ name ? name + " cover" : "default" } />
        </figure>

        { name !== null ? 
        <h2 className="album-info-title title"> { name } </h2> :
        <div className="loader-wrapper">
            <Loader 
            type="ThreeDots"
            color="#9e9"
            width={80}
            height={80} />
        </div> }

        { artists && year !== null ? 
        <p className="album-info-text text">{ 
            artists.map(artist => {
                return artist.name;
            }).join(", ") + " - " + year
             }</p> :""}
        
        <BreadCrumb items={[
            {
                name: "Home",
                href: "/"
            },
            {
                name: "Artists",
                href: "/search?q=" + props.search
            },
            {
                name: localStorage.getItem("artist_name"),
                href: "/artist?id="+ (id_artist ? id_artist : "")
            },
            {
                name: name,
                href: "/album?id="+ (id_album ? id_album + "&artist=" + id_artist : ""),
                isActive: true
            }
        ]}/>
    </section>
    );
}

export default AlbumInfo;