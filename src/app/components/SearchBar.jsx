import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center border  rounded-md overflow-hidden w-full md:w-[400px]">
      <select className=" p-2 text-sm focus:outline-none">
        <option>All</option>
        <option>Books</option>
        <option>Movies</option>
      </select>
      <input
        type="text"
        placeholder="Search by Title, Author, Keyword or ISBN"
        className="px-4 py-2 flex-1 text-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
