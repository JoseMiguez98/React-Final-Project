import React, { Component } from 'react';
import logo from '../../assets/logo.png';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <img id="logo" src={logo} alt="Spotify Logo"/>
                </header>
            </div>
        );
    }
}

export default Header;
