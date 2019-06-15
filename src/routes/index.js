import React, { Component } from 'react';
import 'normalize.css';
import { Route, Switch } from 'react-router-dom';
import HomeView from './homeView';
import SearchView from './searchView';
import Layout from '../components/Layout';

class getRoutes extends Component {
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
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/search" component={SearchView} />
                </Switch>
            </Layout>
            );
        }
    }
    
export default getRoutes;
    