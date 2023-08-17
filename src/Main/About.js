import React from "react";
import photo1 from "../assets/dog-clothes-f3aad6fa.jpeg"
import photo2 from "../assets/finding-the-right-fit-1aa094cc.jpeg"
import photo3 from "../assets/hinh-trang-chu.jpeg"

export default function About() {
    return (
        <div>
            <div className="about-box">
                <h1>ABOUT US - KIM BINH MINH CO.,LTD</h1>
                <div className="about-info">
                    <div className="about-text">
                        <h3>Dog Clothes</h3>
                        <p>Dress your little friend up in the cutest dog clothes. Who says your dog can't go out looking just as fresh as you do? Our dog clothes come in all shapes and sizes and are the perfect fit for your furry friend. Whether you're headed out to a fancy dinner, or just taking a stroll on a cold night, we have just the right outfit for your loving pet.</p>
                    </div>
                    <div className="about-img">
                        <img src ={photo1}/>
                        <button>View more</button>
                    </div>
                </div>
            </div>
            <div className="right-fit">
                <div className="about-img">
                    <img src ={photo2}/>
                    <button>View more</button>
                </div>
                <div className="about-text">
                        <h3>Finding the Right Fit</h3>
                        <p>Make sure your outfit fits just right! You know your size, but do you know your dogs? Our size guide helps you find the perfect-fitting dog clothes so your little one can be just as comfy as they are cute. Your little one not so little after all? We are working on getting bigger sized dog clothes, and appreciate your support in this journey! Check back!</p>
                    </div>
            </div>
            <div className="about-img">
                <img className="long-img" src ={photo3}/>
            </div>
        </div>
    )
}