import React from 'react'
import { Button } from './Button'


function Hero() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Adventure</h1>
            <p>What it is sample text</p>
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
            </div>
            
        </div>
    )
}

export default Hero
