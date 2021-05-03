import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
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
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
