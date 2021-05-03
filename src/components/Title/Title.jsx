import React from "react";
import styles from "./Title.module.scss";

const Title = ({ title, description }) => {
  return (
    <div className={styles.Title}>
      <h3>{title}</h3>
      <div className={styles.line} />
      <p>{description}</p>
    </div>
  );
};

export default Title;
