import React from "react";

const CartCard = ({ name, img, price }) => {
  return (
    <div className="flex justify-between items-center w-full bg-silver-white px-10 py-5">
      <div className="flex gap-8 items-center">
        <img src={img} alt={name} className="w-20 h-20" />
        <p className="text-xl font-poppinsRegular">{name}</p>
      </div>
      <p className="text-xl font-poppinsRegular">${price}</p>
    </div>
  );
};

export default CartCard;
