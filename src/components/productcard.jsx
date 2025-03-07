// write product card here
// write product card here
// src/cart/productcard.jsx
import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$69.99";

  return (
    <div className="border p-4 rounded-lg shadow-lg w-full max-w-xs text-center bg-white">
      <img src=""/>

      <h2 className="text-lg font-bold mt-2">{productName}</h2>
      <p className="text-gray-700 mt-1">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;