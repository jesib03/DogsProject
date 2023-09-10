import React from "react";
import style from "./SearchBar.module.css";
import { getDogsByName } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchBar() {
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState("");

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchName) {
      dispatch(getDogsByName(searchName));
      setSearchName("");
    }
  };

  return (
    <div>
      <div>
        <link
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </div>
      <div>
        <div className={style.searchContainer}>
          <input
            type="search"
            placeholder="Search by name"
            className={style.searchInput}
            onChange={handleChange}
            value={searchName}
          />
          <a
            type="submit"
            href="#"
            onClick={(e) => handleSearch(e)}
            value={searchName}
            className={style.searchBtn}
          >
            <i className="fas fa-search"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
