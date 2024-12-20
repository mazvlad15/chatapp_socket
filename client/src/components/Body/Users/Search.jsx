import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ onSearchChange }) => {
  return (
    <div className="hidden lg:block">
      <label className="input items-center flex bg-[#DBE2EF]">
        <SearchIcon className="cursor-pointer" />
        <input
          type="text"
          className="grow rounded-full px-1 py-2"
          placeholder="Search"
          onChange={onSearchChange} 
        />
      </label>
    </div>
  );
};

export default Search;
