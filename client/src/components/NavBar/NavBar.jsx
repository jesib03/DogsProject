import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <div>
      <header className={style.mainContainer}>
        <h1 className={style.logo}>
          <Link to="/">DOGS</Link>
        </h1>
        <ul className={style.mainNav}>
          <li>
            <SearchBar />
          </li>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/create">CREATE</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
