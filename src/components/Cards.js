import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Sample text</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='explore'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
