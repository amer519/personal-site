import React, {useState} from 'react'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='nanbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Amer <i className='fab-fa-typo3'></i>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
