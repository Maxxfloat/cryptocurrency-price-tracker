import React, { Dispatch, SetStateAction } from "react";

const Search: React.FC<{
  setSearhValue: Dispatch<SetStateAction<string>>;
}> = ({ setSearhValue }) => {
  return (
    <div className="">
      <input
        onChange={(e) => setSearhValue(e.target.value)}
        className="bg-white p-2 shadow-md rounded-md w-full"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
