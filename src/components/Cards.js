import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Sample text</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='explore the waterfall'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Travel the Islands'
                            label='Travel'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='explore the waterfall'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Travel the Islands'
                            label='Travel'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-9.jpg'
                            text='explore the waterfall'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
