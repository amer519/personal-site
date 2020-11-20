import React from 'react'
import { Button } from './Button'
import './Footer.css'

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
                    <div className='input-areas'>
                        <form>
                            <input 
                                className='footer-input'
                                type='email' 
                                name='email' 
                                placefolder='Your Email'  />
                                <Button buttonStyle='btn--outline'>Enter</Button>
                        </form>
                    </div>
            </section>
        </div>
    )
}

export default Footer
