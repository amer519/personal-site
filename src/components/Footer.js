import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section
                className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join
                    </p>
                    <p className='footer-subscription-text'>
                        sample text
                    </p>
                    {/* <div className='input-areas'>
                        <form>
                            <input 
                                className='footer-input'
                                type='email' 
                                name='email' 
                                placefolder='Your Email'  />
                                <Button buttonStyle='btn--outline'>Enter</Button>
                        </form>
                    </div> */}
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        {/* <h2>About Me</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimo</Link>
                        <Link to='/'>career</Link>
                        <Link to='/'>invesstor</Link>
                        <Link to='/'>Terms</Link> */}
                    </div>

                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Amer <i className='fab fa-typo3'></i>
                        </Link>
                    </div>
                    <small className='website-rights'>Amer 2020</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='Linkedin'
                        >
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
