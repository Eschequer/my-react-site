import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nave.module.scss";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <h1>
        <Link className={styles.logo} to="/">
          My Site
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
