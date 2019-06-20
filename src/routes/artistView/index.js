import React, { Component } from 'react';
import ArtistInfo from '../../components/ArtistPage/ArtistInfo';
import { BASE_URL } from '../../api';
import queryString from 'query-string';

class ArtistView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }


    componentDidMount() {
        const id = queryString.parse(this.props.location.search).id;
        const url = `${ BASE_URL }artists/${id}`;
        const token = localStorage.getItem("access_token");

        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }
        }).then(response =>{
            return response.json()
        }).then(response => {
            console.log(response);
             this.setState({
             data: response
             });
        });
    }

    render() {
        console.log(this.props);    
       return (
       <div>
            <ArtistInfo
                data={ this.state.data }
                search={ queryString.parse(this.props.location.search).q } />
            {/* <AlbumList /> */}
       </div> );
    }
}

export default ArtistView;