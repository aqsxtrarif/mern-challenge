import React from "react";
import Button from "./Button";

const Search = ({ searchInput, onSearch }) => {
  return (
    <div className="flex ml-auto pr-14 w-fit">
      <input
        type="text"
        name="search"
        id="search"
        className="w-80 px-4 py-3 border border-gray-300 outline-none font-poppinsRegular placeholder:font-poppinsRegular"
        placeholder="Search Item..."
        value={searchInput}
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button type="button" className="px-6 py-3 bg-coral-red text-white font-poppinsRegular">
        Search
      </Button>
    </div>
  );
};

export default Search;
