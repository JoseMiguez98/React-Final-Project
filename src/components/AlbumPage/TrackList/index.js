import React, { Component } from 'react';
import './style.css';

class TrackRow extends Component{
    constructor(props) {
        super(props);

        this.state = {
            playing: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.audio = new Audio(props.prev_url);
        this.audio.onended = this.togglePlay;
    }

    handleClick() {
        if(this.state.playing) {
            this.audio.pause();
        } else {
            this.audio.play();
        }

        this.togglePlay();
    }

    togglePlay() {
        this.setState(prevState => {
            return {...prevState, ...prevState.playing = !prevState.playing}
        });
    }

    render() {
        const { name, id, index } = this.props;

        return ( 
        <li
         onClick={ this.handleClick }
          data-id={ id }
           className={ 
               (index%2 === 0 ? "track-row pair" : "track-row odd") + 
               (this.state.playing ? " playing" : "")} >
        <p className="text">{ name }</p>
    </li> );
    }
}
    

const TrackList = props => {
    const { tracks } = props;
    return (
        <div className="track-list-container">
        <p className="text">CD 1</p>
        <ul className="track-list">
             {tracks.length > 0 ? tracks.map((track, key) => {
                return <TrackRow 
                name={ track.name }
                prev_url={ track.preview_url }
                id={ track.id }
                index={ key }
                key={ "Track: "+key } />
            }): <p className="text">The album has no tracks</p>}
        </ul>
        </div>
    )
}

export default TrackList;