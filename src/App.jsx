import { useEffect, useState } from "react";
import RootLayout from "@layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { toast } from "react-toastify";

//=========================================
// pages imports
//=========================================
import ItemsList from "@pages/ItemsList";
import AddItem from "@pages/AddItem";
import Checkout from "@pages/Checkout";
import PagesList from "@pages/PagesList";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  // On component mount, update the cart count from local storage
  useEffect(() => {
    updateCartCount();
  }, []);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    toast.success("Item added to cart!");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout cartCount={cartCount} />,
      children: [
        { index: true, element: <PagesList /> },
        { path: "itemslist", element: <ItemsList addToCart={addToCart} /> },
        { path: "additem", element: <AddItem /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
