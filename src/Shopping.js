import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {db} from "./service/firebaseConfig";
import { collection, getDocs } from "firebase/firestore"; 


export default function Shopping() {
    const [petCloths, setPetCloths] = useState([]);
    const [petBeds, setPetBeds] = useState([]);

    useEffect(() => {
        async function fetchPetCloths() {
            const petClothsCollection = collection(db, "petcloth");
            const querySnapshot = await getDocs(petClothsCollection);

            const petClothsData = [];
            querySnapshot.forEach((doc) => {
                petClothsData.push({ id: doc.id, data: doc.data() });
            });

            setPetCloths(petClothsData);
        }

        fetchPetCloths();
    }, []);

    useEffect(() => {
        async function fetchPetBeds() {
            const petBedsCollection = collection(db, "petbed");
            const querySnapshot = await getDocs(petBedsCollection);

            const petBedsData = [];
            querySnapshot.forEach((doc) => {
                petBedsData.push({ id: doc.id, data: doc.data() });
            });

            setPetBeds(petBedsData);
        }

        fetchPetBeds();
    }, []);
    const clothItems = petCloths.map((petCloth) => (
        <div className="shopping-item">
            <Link to="/card" state={petCloth.data}>
                <img src={petCloth.data.img} alt={petCloth.data.code}  />
            </Link>
            <h2>{petCloth.data.code}</h2>
            <h3>{"SKU : " + petCloth.data.code}</h3>
            <h2 style={{ color: 'red' }}>Contact</h2>
        </div>
    ))

    const bedItems = petBeds.map((petBed) => (
        <div className="shopping-item">
            <Link to="/card" state={petBed.data}>
                <img src={petBed.data.img} alt={petBed.data.code} />
            </Link>
            <h2>{petBed.data.code}</h2>
            <h3>{"SKU : " + petBed.data.code}</h3>
            <h2 style={{ color: 'red' }}>Contact</h2>
        </div>
    ))
    return (
    <div className="shopping-sec">
        <h1>PET CLOTH</h1>
        <div className="shopping">
            {clothItems}
        </div>  
        <h1>PET BED</h1>
        <div className="shopping">
            {bedItems}
        </div>    
    </div>
    )
}