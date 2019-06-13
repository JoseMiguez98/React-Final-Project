import React from 'react';
import 'normalize.css';
import { Route, Switch } from 'react-router-dom';
import HomeView from './homeView';
import AboutView from './aboutView';
import Layout from '../components/Layout';

const getRoutes = function() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/about" component={AboutView} />
            </Switch>
        </Layout>
        )
    };
    
    export default getRoutes;
    