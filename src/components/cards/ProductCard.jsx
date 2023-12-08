import React from "react";
import Button from "@common/Button";

const ProductCard = ({ id, name, price, img, addToCart }) => {
  return (
    <div className="px-2">
      <img src={img} alt="profile" className="w-80 h-80" />
      <h4 className="text-center py-2 font-medium text-xl capitalize font-poppinsRegular">
        {name}
      </h4>
      <div className="flex justify-between items-center pt-2 pl-3">
        <span className="font-poppinsRegular">Price: ${price}</span>
        <Button
          type="button"
          className="primary-btn"
          onClick={() => addToCart({ id, name, price, img })}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
