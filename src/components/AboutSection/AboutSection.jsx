import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.scss";
import about1 from "../../images/about1.jpg";

const AboutSection = () => {
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  };

  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
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
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </div>
      <div className={styles.image}>
        <img src={about1} alt="photographer" />
      </div>
    </div>
  );
};

export default AboutSection;
