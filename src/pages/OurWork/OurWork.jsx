import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import styles from "./OurWork.module.scss";
import nature from "../../images/nature.jpg";
import food from "../../images/food.jpg";
import people from "../../images/people.jpg";

const OurWork = () => {
  return (
    <motion.div
      className={styles.Page}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}
    >
      <div className={styles.movie}>
        <h2>Nature</h2>
        <div className={styles.line} />
        <Link to="/work/nature">
          <img src={nature} alt="nature" />
        </Link>
      </div>
      <div className={styles.movie}>
        <h2>People</h2>
        <div className={styles.line} />
        <Link to="/work/people">
          <img src={people} alt="people" />
        </Link>
      </div>
      <div className={styles.movie}>
        <h2>Food</h2>
        <div className={styles.line} />
        <Link to="work/food">
          <img src={food} alt="food" />
        </Link>
      </div>
    </motion.div>
  );
};

export default OurWork;
