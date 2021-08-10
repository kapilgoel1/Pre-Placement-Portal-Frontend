import React from "react";
import "./SearchBar.scss";

function Searchbar(props) {
  const { onSearch, searchText } = props;

  const handleInput = (e) => {
    const text = e.target.value;
    onSearch(text);
  };

  return (
    <div>
      <div className="search-container">
        <input
          className="input"
          onChange={handleInput}
          //onKeyPress={onClickHandler}
          type="text"
          value={searchText}
          placeholder="Search..."
        />
        {/* <button onClick={onClickHandler} type="submit">
          Search
        </button> */}
      </div>
    </div>
  );
}

export default Searchbar;
