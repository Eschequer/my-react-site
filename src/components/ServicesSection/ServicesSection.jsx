import React from "react";
import { motion } from "framer-motion";
import styles from "./ServicesSection.module.scss";
import clock from "../../images/clock.svg";
import teamwork from "../../images/teamwork.svg";
import money from "../../images/money.svg";
import diaphragm from "../../images/diaphragm.svg";
import about2 from "../../images/about2.jpg";
import { useAnimScroll } from "../../useAnimScroll";
import { scrollAnim } from "../../animation";

const ServicesSection = () => {
  const [ref, controls] = useAnimScroll(0.5);

  return (
    <motion.div
      className={styles.ServicesSection}
      ref={ref}
      variants={scrollAnim}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      animate={controls}
      initial="hidden"
    >
      <div className={styles.description}>
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={diaphragm} alt="diaphragm" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={about2} alt="camera" />
      </div>
    </motion.div>
  );
};

export default ServicesSection;
