import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Nave.module.scss";

const Nav = () => {
  const currentUrl = useLocation().pathname;
  let [winWidth, setWinWidth] = useState(window.innerWidth);

  window.onresize = (e) => {
    setWinWidth(e.target.innerWidth);
  };

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
          <motion.div
            className={styles.line}
            initial={{ width: "0%" }}
            transition={{ duration: 0.8 }}
            animate={{
              width:
                currentUrl === "/" && winWidth >= 1500
                  ? "60%"
                  : currentUrl === "/" && winWidth < 1500
                  ? "100%"
                  : "0%",
            }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <motion.div
            className={styles.line}
            initial={{ width: "0%" }}
            transition={{ duration: 0.8 }}
            animate={{
              width:
                currentUrl === "/work" && winWidth >= 1500
                  ? "60%"
                  : currentUrl === "/work" && winWidth < 1500
                  ? "100%"
                  : "0%",
            }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <motion.div
            className={styles.line}
            initial={{ width: "0%" }}
            transition={{ duration: 0.8 }}
            animate={{
              width:
                currentUrl === "/contact" && winWidth >= 1500
                  ? "60%"
                  : currentUrl === "/contact" && winWidth < 1500
                  ? "100%"
                  : "0%",
            }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
