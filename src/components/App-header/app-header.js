import React from 'react';
import { Link } from 'react-router-dom';
import './app-header.css';

const AppHeader = () => {
    return (
        <header className = 'App-header'>
            <Link to='/'>
                <div className = 'App-logo'>
                    <img src='/assets/images/logo.png' alt='logo'/>
                        <p>POKEDEX</p>
                </div>
            </Link>
        </header>
    )
}

export default AppHeader;
