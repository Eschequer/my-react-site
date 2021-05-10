import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../../animation";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <motion.div
      className={styles.Page}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}
    >
      <div className={styles.title}>
        <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
      </div>
      <div className={styles.hide}>
        <motion.div className={styles.contact} variants={titleAnim}>
          <div className={styles.circle} />
          <h2>Where we are</h2>
        </motion.div>
      </div>
      <div className={styles.hide}>
        <motion.div className={styles.contact} variants={titleAnim}>
          <div className={styles.circle} />
          <h2>Send us a message</h2>
        </motion.div>
      </div>
      <div className={styles.hide}>
        <motion.div className={styles.contact} variants={titleAnim}>
          <div className={styles.circle} />
          <h2>Call us</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
