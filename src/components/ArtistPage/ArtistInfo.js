import React from 'react';
import '../common/styles/info-container.css';
import BreadCrumb from '../common/BreadCrumb';
import Loader from 'react-loader-spinner';

const ArtistInfo = props => {
    const { images = null, name = null, genres = null, id = null } = props.data;

    return (
        <section className="artist-info info-container">
        <figure className="artist-info-logo">
            <img 
            src={ images !== null && images.length > 0 ? images[1].url : "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" } 
            alt={ name ? name + " logo" : "default" } />
        </figure>

        { name !== null ? 
        <h2 className="artist-info-title title"> { name } </h2> :
        <div className="loader-wrapper">
            <Loader 
            type="ThreeDots"
            color="#9e9"
            width={80}
            height={80} />
        </div> }

        { genres !== null && genres.length > 0 ? 
        <p className="artist-info-text text">{ genres[0].charAt(0).toUpperCase() + genres[0].slice(1) }</p> :""}
        
        <BreadCrumb items={[
            {
                name: "Home",
                href: "/"
            },
            {
                name: "Artists",
                href: "/search?q=" + localStorage.getItem("search")
            },
            {
                name: name,
                href: "/artist?id="+ (id ? id : ""),
                isActive: true
            }
        ]}/>
    </section>
    );
};

export default ArtistInfo;