import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.scss";
import about1 from "../../images/about1.jpg";
import { titleAnim, fade, photoAnim } from "../../animation";
import Wave from "../Wave/Wave";

const AboutSection = () => {
  const container = {
    hidden: { x: 50 },
    show: {
      x: 0,
      transition: {
        duration: 0.7,
        ease: "backIn",
        staggerChildren: 0.2,
        when: "afterChildren",
        type: "tween",
      },
    },
  };

  return (
    <div className={styles.AboutSection}>
      <div className={styles.description}>
        <motion.div
          className="title"
          variants={container}
          animate="show"
          initial="hidden"
        >
          <motion.h2 className={styles.hide} variants={titleAnim}>
            We work to make
          </motion.h2>
          <motion.h2 className={styles.hide} variants={titleAnim}>
            your <span>dreams</span> come
          </motion.h2>
          <motion.h2 className={styles.hide} variants={titleAnim}>
            true.
          </motion.h2>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>
      <div className={styles.image}>
        <motion.img src={about1} alt="photographer" variants={photoAnim} />
      </div>
      <Wave />
    </div>
  );
};

export default AboutSection;
