import React, { Component } from 'react';
import 'normalize.css';
import { Route, Switch } from 'react-router-dom';
import HomeView from './homeView';
import SearchView from './searchView';
import Layout from '../components/Layout';
import NotFound from '../components/common/NotFound/NotFound';

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
        <Layout>
        <Switch>
        <Route exact path="/" component={ HomeView } />
        <Route path="/search" component={ SearchView } />
        <Route component={ NotFound } />
        </Switch>
        </Layout>
        );
    }
}
export default getRoutes;
