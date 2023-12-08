import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@services/api";
import Search from "@common/Search";
import ProductCard from "@cards/ProductCard";

const ItemsList = ({ addToCart }) => {
  const [searchInput, setSearchInput] = useState("");

  const { data: productsData } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  const filteredProducts = productsData?.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="px-32 py-10">
      <h1 className="text-4xl text-center font-semibold mb-10 font-poppinsSemibold">
        Products
      </h1>

      <Search searchInput={searchInput} onSearch={handleSearch} />

      <div className="flex gap-x-6 gap-y-10 g flex-wrap justify-center py-8">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
