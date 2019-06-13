import React, { Component } from 'react';
import './homeView.css';
import SearchForm from '../../components/SearchForm';

class HomeView extends Component {
    render() {
        return (
            <main>
            
                <section className="main-info">
                
                    <h2 id="main-info-title">
                        Welcome to
                        <span>Spotisearch</span>
                    </h2>
                    
                    <article className="main-info-text-container">
                        <p className="main-info-text">
                        Search your favorite songs over Spotify, just
                        enter an artist's name in the following search box
                        and enjoy!
                        </p>
                    </article>
                
                </section>
                
             <SearchForm/>
            
            </main>
            );
        }
    }
    
    export default HomeView;
    