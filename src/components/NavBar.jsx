import React, { Fragment, useState } from "react";
import { HiSearch } from "react-icons/hi";
import "../Styles/NavBarStyle.css";
function NavBar() {
  const [toggle, setToggle] = useState(true);
  return (
    <Fragment>
      <nav className={toggle ? "" : "navBarColor"}>
        <div className="nav-options">
          <h1 id={toggle ? "" : "heading"}>SCREENZ</h1>
          <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
          <span id={toggle ? "Movies" : "MoviesLight"}>Tv Shows</span>
          <span id={toggle ? "Movies" : "MoviesLight"}>Trending</span>
          <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Search"></input>
          <HiSearch fontSize={21} color="black" id="search" />
          <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
            <div
              id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}
            ></div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
