import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "./service/firebaseConfig";

export default function Card({ addToCart, decreaseQty }) {
  const location = useLocation();
  const { cloth } = location.state;

  // Local state to track the quantity of the item
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="card">
      <img src={location.state.img} />
      <div className="card-text">
        <h1>{location.state.code}</h1>
        <h3>{"SKU : " + location.state.code}</h3>
        <h2 style={{ color: "red" }}>Price: Contact</h2>

        <div>
          {/* Button to decrease item quantity */}
          <button
            onClick={() => {
              if (quantity > 0) {
                decreaseQty(location.state);
                setQuantity(quantity - 1);
              }
            }}
          >
            Reduce
          </button>

          {/* Display the current quantity */}
          <span>{quantity}</span>

          {/* Button to increase item quantity */}
          <button
            onClick={() => {
              addToCart(location.state);
              setQuantity(quantity + 1); // Increment quantity by 1
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
