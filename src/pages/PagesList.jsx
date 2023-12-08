import React from "react";
import { userRoutes } from "@routes/routes";
import { NavLink } from "react-router-dom";

const PagesList = () => {
  return (
    <div className="px-32 py-14">
      <div className="flex gap-7 justify-center items-center">
        {userRoutes.map((route) => (
          <NavLink key={route.id} to={route.path} className="direction-btn">
            {route.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PagesList;
