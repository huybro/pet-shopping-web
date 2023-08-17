import React  from "react";
import { useLocation } from "react-router-dom";
import { db } from "./service/firebaseConfig";

export default function Card() {
    const location = useLocation()
    const {cloth} = location.state
    
    return (
        <div className="card">
             <img src={location.state.img} />
             <div className="card-text">
                <h1>{location.state.code}</h1>
                <h3>{"SKU : " + location.state.code}</h3>
                <h2 style={{ color: 'red' }}>Price: Contact</h2>
             </div>
        </div>
    )
}