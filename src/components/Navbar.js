import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='nanbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Amer <i className='fab fa-typo3' />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
