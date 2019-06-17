import React, { Component } from 'react';
import 'normalize.css';
import { Route, Switch } from 'react-router-dom';
import HomeView from './homeView';
import SearchView from './searchView';
import Layout from '../components/Layout';
import NotFound from '../components/common/NotFound/NotFound';

class GetRoutes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchExpanded: false
        }

        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch() {
        this.setState( prevState => {
            return {...prevState, ...prevState.searchExpanded = !prevState.searchExpanded};
        });
    }

    render() {
        return (
            <Layout 
                handleSearchClick={ this.toggleSearch }
                searchExpanded={ this.state.searchExpanded } >
                <Switch>
                    <Route exact path="/" component={ HomeView } />
                    <Route path={"/search"} component={ SearchView } />
                    <Route component={ NotFound } />
                </Switch>
            </Layout>
            );
        }
    }

export default GetRoutes;
    