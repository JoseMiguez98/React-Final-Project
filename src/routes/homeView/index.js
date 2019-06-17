import React, { Component } from 'react';
import './style.css';
import { SearchFormRouter as SearchForm } from '../../components/common/SearchForm';

class HomeView extends Component {

    render() {
        return (
            <main>
            
                <section className="main-info">
                
                    <h2 className="main-info-title title">
                        Welcome to
                        <span>Spotisearch</span>
                    </h2>
                    
                    <article className="main-info-text-container">
                        <p className="main-info-text text">
                        Search your favorite songs over Spotify, just
                        enter an artist's name in the following search box
                        and enjoy!
                        </p>
                    </article>
                
                </section>
                
             <SearchForm handleSubmit={ this.props.handleFormSubmit } placeholder="Type the name of your favorite artist"/>
            
            </main>
            );
        }
    }
    
    export default HomeView;
    