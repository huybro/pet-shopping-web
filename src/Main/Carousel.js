import React, { useState, useEffect } from "react";
import CarouselItems from "./CarouselItems"
import photo1 from "../assets/pic1.png";
import photo2 from "../assets/pic2.png"

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const items = [
        photo1,
        photo2
    ]
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = items.length - 1; 
        }
        else if (newIndex > items.length - 1) {
            newIndex = 0
        }
        setActiveIndex(newIndex);
    };

    const handleAutoSlide = () => {
        updateIndex(activeIndex + 1);
      };
    
      useEffect(() => {
        const interval = setInterval(handleAutoSlide, 2700);
    
        return () => clearInterval(interval);
      }, [activeIndex]);

    return (
        <div className="carousel">
            <div className="inner"  style={{ transform: `translateX(-${activeIndex * 100}% )` }}>
                {items.map((items) => {
                    return <CarouselItems item={items}/>;
                })}
            </div>
            <div className="carousel-buttons">
                <button className ='button-arrow' onClick={() => updateIndex(activeIndex-1)}><span class="material-symbols-outlined">chevron_left</span></button>
                <button className ='button-arrow' onClick={() => updateIndex(activeIndex + 1)}><span class="material-symbols-outlined">chevron_right</span></button>
            </div>
            <div className="indicators">
                    {items.map((items,index) => {
                        return (
                        <button onClick={() => updateIndex(index)} className="indicator-buttons">
                        <span className = {`material-symbols-outlined ${index === activeIndex ? 'indicator-symbol-active' : 'indicator-symbol'}`}>radio_button_checked</span>
                    </button>
                    )
                    })}

                </div>
        </div>
    )
}