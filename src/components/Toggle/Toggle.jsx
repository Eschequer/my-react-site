import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Toggle.module.scss";

const Toggle = (props) => {
  const [faqToggle, setFagToggle] = useState(false);

  const clickHandle = () => {
    setFagToggle(!faqToggle);
  };

  return (
    <motion.div layout className={styles.Toggle} onClick={clickHandle}>
      <motion.h4 layout>{props.title}</motion.h4>
      {faqToggle && props.children}
      <div className={styles.faqLine} />
    </motion.div>
  );
};

export default Toggle;
