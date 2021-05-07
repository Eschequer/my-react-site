import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  lineAnim,
  photoAnim,
  slider,
  sliderContainer,
  movieContainer,
} from "../../animation";
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
      <motion.div variants={sliderContainer}>
        <motion.div className={styles.frame} variants={slider} />
        <motion.div className={styles.frame2} variants={slider} />
        <motion.div className={styles.frame3} variants={slider} />
        <motion.div className={styles.frame4} variants={slider} />
      </motion.div>
      <motion.div className={styles.movie} variants={movieContainer}>
        <motion.h2 variants={fade}>Nature</motion.h2>
        <motion.div variants={lineAnim} className={styles.line} />
        <Link to="/work/nature">
          <div style={{ overflow: "hidden" }}>
            <motion.img variants={photoAnim} src={nature} alt="nature" />
          </div>
        </Link>
      </motion.div>
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
