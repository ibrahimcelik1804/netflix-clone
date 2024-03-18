import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4">
      <Link to={"/"}>
        <img
          style={{ maxWidth: "250px" }}
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt=""
        />
      </Link>
    </header>
  );
};

export default Header;
