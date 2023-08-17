import React from "react";

import photo1 from "../assets/wear-ffe1e72f.jpeg";
import photo2 from "../assets/bed-a33505f0.jpeg";

export default function FeaturedCollection() {
    return (
        <div className="featured-collection">
            <h1>FEATURED COLLECTION</h1>
            <div className="featured-img">
                <div className="collection">
                    <img src={photo1}/>
                    <h3>PET CLOTH</h3>
                </div>
                <div className="collection">
                    <img src={photo2}/>
                    <h3>PET BED</h3>
                </div>
            </div>
        </div> 
    )
}