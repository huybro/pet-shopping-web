import React from 'react';
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";


export default function Header() {
    return (
    <header className='head'>
        <div className='head-text'>
            <h3>Care for pets the right way to keep them healthy and lovely you know?</h3>
        </div>
        <div className='head-nav'>
                <Link to="/">
                    <img src={logo} alt="Logo" style={{ maxWidth: "100%", height: "auto" }} />
                </Link>

            <div  className="dropdown-menu">                
                <ul>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/">PRODUCT</Link>                        
                        <ul class="dropdown">
                            <li><Link to="/cloth">Pet Cloth</Link></li>
                            <li><Link to="/bed">Pet Bed</Link></li>
                            <li><Link to="/">Pet Accessory</Link></li>
                            <li><Link to="/">Pet Toy</Link></li>
                            <li><Link to="/">Proctective Mask</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">GALLERY</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                <div className='logo-nav'>
                    <a href='google.com'><i class="fa fa-cart-shopping"></i></a>
                    <a href='google.com'><i class="fa fa-magnifying-glass"></i></a>
                </div>
            </div>
        </div>
    </header>
    )
}