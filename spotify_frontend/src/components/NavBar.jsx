import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();

  const handleSearchText = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchQuery);
  };

  return (
    <div className="navBar">
      <div className="navBar__logo">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="Spotify Logo"
          width={140}
          height={40}
          onClick={()=>navigate("/")}
        />
      </div>

      <form className="navBar__search" onSubmit={handleSearch}>
        <input
          type="text"
          className="navBar__search-input"
          placeholder="What do you want to listen to?"
          value={searchQuery}
          onChange={handleSearchText}
          onClick={() => navigate("/search")}
        />
      </form>

      <div className="navBar__buttons">
        <button className="navBar__button">Sign up</button>
        <button className="navBar__button navBar__button--login">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
