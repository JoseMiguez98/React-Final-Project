import React from 'react';
import ArtistRow from '../ArtistRow';
import './style.css';

const ArtistList = props => (
    <ul className="artist-list">
        <ArtistRow 
            logo="https://i.pinimg.com/236x/31/be/99/31be99233e46952b8460a93fe944aceb.jpg"
            name="Duki"/>
        <ArtistRow
            logo="https://static.stereogum.com/uploads/2013/06/pink-floyd-608x450.jpg" 
            name="Pink Floyd"/>
        <ArtistRow
            logo="https://pbs.twimg.com/profile_images/929030268043845633/ilS1ri2v.jpg"
            name="Eminem"/>
        <ArtistRow
            logo="https://pbs.twimg.com/profile_images/929030268043845633/ilS1ri2v.jpg"
            name="Eminem"/>
    </ul>
);

export default ArtistList;