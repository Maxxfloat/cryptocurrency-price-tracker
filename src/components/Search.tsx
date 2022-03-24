import React, { Dispatch, SetStateAction } from "react";

const Search: React.FC<{
  setSearhValue: Dispatch<SetStateAction<string>>;
}> = ({ setSearhValue }) => {
  return (
    <div>
      <input onChange={(e) => setSearhValue(e.target.value)} />
    </div>
  );
};

export default Search;
