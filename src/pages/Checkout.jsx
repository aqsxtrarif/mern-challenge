import React, { useState, useEffect } from "react";
import { calculateTotalPrice } from "@utils/utils";
import CartCard from "@cards/CartCard";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div className="px-32 py-10">
      <h1 className="text-4xl text-center font-semibold mb-8 font-poppinsSemibold">
        Checkout
      </h1>

      {cartItems.length === 0 ? (
        <p className="font-poppinsRegular">Your cart is empty.</p>
      ) : (
        <div className="flex gap-3 justify-between">
          <div className="flex flex-col gap-5 w-3/4">
            {cartItems.map((item) => (
              <CartCard key={item.id} {...item} />
            ))}
          </div>

          <div className="flex justify-between items-center p-6 w-1/5 bg-[#F8F8F8] h-fit">
            <p className="font-semibold text-2xl font-poppinsRegular">
              {" "}
              Total:{" "}
            </p>

            <span className="font-poppinsRegular">
              ${calculateTotalPrice(cartItems)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
