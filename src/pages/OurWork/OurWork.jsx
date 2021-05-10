import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimScroll } from "../../useAnimScroll";
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
import ScrollTop from "../../components/ScrollTop";

const OurWork = () => {
  const [ref1, controls1] = useAnimScroll(0.3);
  const [ref2, controls2] = useAnimScroll(0.3);

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
      <motion.div
        className={styles.movie}
        ref={ref1}
        animate={controls1}
        initial="hidden"
        variants={movieContainer}
        transition={{ duration: 0.5 }}
      >
        <h2>People</h2>
        <motion.div variants={lineAnim} className={styles.line} />
        <Link to="/work/people">
          <img src={people} alt="people" />
        </Link>
      </motion.div>
      <motion.div
        className={styles.movie}
        ref={ref2}
        animate={controls2}
        variants={movieContainer}
        initial="hidden"
        transition={{ duration: 0.5 }}
      >
        <h2>Food</h2>
        <motion.div variants={lineAnim} className={styles.line} />
        <Link to="work/food">
          <img src={food} alt="food" />
        </Link>
      </motion.div>
      <ScrollTop />
    </motion.div>
  );
};

export default OurWork;
