import React from 'react';
import { Link } from 'react-router-dom';
import './app-header.scss';

const AppHeader = () => {
    return (
        <header className = 'app-header'>
            <Link to='/'>
                <div className = 'app-logo'>
                    <img src='/assets/images/logo.png' alt='logo'/>
                        <p>POKEDEX</p>
                </div>
            </Link>
        </header>
    )
}

export default AppHeader;
