import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TbHome } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { ImEnter } from "react-icons/im";

const Header = () => {
  return (
    <header>
      <h2>
        <Link to="/">Gelir-Gider Takip Uygulaması</Link>
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Anasayfa <TbHome />
            </NavLink>
          </li>
          <li>
            <NavLink to="/income">
              Gelir <ImEnter />
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses">
              Gider <ImExit />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
