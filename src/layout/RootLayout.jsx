import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RootLayout = ({ cartCount }) => {
  return (
    <Fragment>
      <Header cartCount={cartCount} />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
