import React from 'react';
import Carousel from './Carousel';
import FeaturedCollection from './FeaturedCollection';
import About from './About';
import Shopping from '../Shopping';

export default function Main() {
    return (
        <div>
            <Carousel />
            <FeaturedCollection />
            <About />
            <Shopping/>
        </div>
    )
}