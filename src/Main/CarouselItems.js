import React from "react";

export default function CarouselItems({item}) {
    return (
        <div className="carousel-item">
            <img className="carousel-img" src ={item}/>
        </div>
    )
}