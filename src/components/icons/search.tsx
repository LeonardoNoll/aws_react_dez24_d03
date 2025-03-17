import React from "react";

const Search = ({ color = "#878A92" }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2252 18.9799C13.28 18.9799 15.2507 18.1636 16.7036 16.7106C18.1566 15.2577 18.9729 13.287 18.9729 11.2322C18.9729 9.17737 18.1566 7.20672 16.7036 5.75374C15.2507 4.30077 13.28 3.4845 11.2252 3.4845C9.17038 3.4845 7.19973 4.30077 5.74675 5.75374C4.29378 7.20672 3.47751 9.17737 3.47751 11.2322C3.47751 13.287 4.29378 15.2577 5.74675 16.7106C7.19973 18.1636 9.17038 18.9799 11.2252 18.9799Z"
        stroke={color}
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5225 21.5155L16.5782 17.5712"
        stroke={color}
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Search;
