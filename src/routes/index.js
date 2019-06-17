import React from 'react';
import 'normalize.css';
import { Route, Switch } from 'react-router-dom';
import HomeView from './homeView';
import SearchView from './searchView';
import Layout from '../components/Layout';
import NotFound from '../components/common/NotFound/NotFound';

const getRoutes = () => (
        <Layout>
            <Switch>
                <Route exact path="/" component={ HomeView } />
                <Route path={"/search"} component={ SearchView } />
                <Route component={ NotFound } />
            </Switch>
        </Layout>
    );

export default getRoutes;
    