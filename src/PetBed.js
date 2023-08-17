import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./service/firebaseConfig";
import { Document, Page } from '@react-pdf/renderer';


export default function PetCloth() {
    const [petCloths, setPetCloths] = useState([]);

    useEffect(() => {
        async function fetchPetCloths() {
            const petClothsCollection = collection(db, "cloth");
            const querySnapshot = await getDocs(petClothsCollection);

            const petClothsData = [];
            querySnapshot.forEach((doc) => {
                petClothsData.push({ id: doc.id, data: doc.data() });
            });

            setPetCloths(petClothsData);
        }

        fetchPetCloths();
    }, []);

    return (
        <Document>
        <Page wrap={false} className="shopping-sec">
            <h1>PET BED</h1>
            <div className="shopping">
                {petCloths.map((petCloth) => (
                    <div className="shopping-item">
                    <Link to={`/card`} state={petCloth.data}>
                        <img src={petCloth.data.img} alt="Pet Cloth" />
                        <h2>{petCloth.data.code}</h2>
                        <h3>{"SKU : " + petCloth.data.code}</h3>
                    </Link>
                        <h2 style={{ color: 'red' }}>Contact</h2>
                    </div>
                ))}
            </div>
        </Page>
        </Document>
    );
}
