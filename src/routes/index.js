import React, { Component } from 'react';
import 'normalize.css';
import { Route, Switch } from 'react-router-dom';
import HomeView from './homeView';
import SearchView from './searchView';
import ArtistView from './artistView';
import AlbumView from './albumView';
import Layout from '../components/Layout';
import NotFound from '../components/common/NotFound/NotFound';
import { Provider } from 'react-redux';
import  { store } from '../redux/store';

class getRoutes extends Component {
    
    componentDidMount() {
        //If a token exists calculate his life time to check if expired
        let token_date = localStorage.getItem("time_start") ? new Date(localStorage.getItem("time_start")) : null;
        let token_live_time = token_date
        ? Math.floor((new Date().getTime() - token_date.getTime()) / 1000)
        : null;
        
        if(!localStorage.getItem("access_token") || token_live_time >= 3600) {
            fetch("http://localhost:8888/token").then(res => {
            return res.json();
        }).then(res => {
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("time_start", new Date().toString());
        });
    }
}


render(){
    return (
        <Provider store={store}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ HomeView } />
                    <Route path="/search" component={ SearchView } />
                    <Route path="/artist" component={ ArtistView } />
                    <Route path="/album" component={ AlbumView } />
                    <Route component={ NotFound } />
                </Switch>
            </Layout>
        </Provider>
        );
    }
}
export default getRoutes;