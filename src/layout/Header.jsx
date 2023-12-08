import React from "react";
import CartIcon from "@assets/svgs/cart.svg?react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-between px-32 py-6">
      <NavLink to={"/"} className="text-2xl font-medium font-poppinsRegular">
        RandoStore
      </NavLink>

      <div className="relative">
        <CartIcon
          className="cursor-pointer"
          onClick={() => navigate("/checkout")}
        />
        <div className="w-5 h-5 absolute -top-3 -right-3 font-poppinsRegular text-xs bg-coral-red rounded-full flex justify-center items-center text-white">
          {cartCount}
        </div>
      </div>
    </div>
  );
};

export default Header;
