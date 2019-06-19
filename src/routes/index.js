import React, { Component } from 'react';
import 'normalize.css';
import { Route, Switch } from 'react-router-dom';
import HomeView from './homeView';
import SearchView from './searchView';
import Layout from '../components/Layout';
import NotFound from '../components/common/NotFound/NotFound';

class getRoutes extends Component {
    
    componentDidMount() {
        if(!localStorage.getItem("access_token")) {
            fetch("http://localhost:8888/token").then(res => {
            return res.json();
        }).then(res => {
            localStorage.setItem("access_token", res.access_token);
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
