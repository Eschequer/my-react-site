import React from "react";
import styles from "./FaqSection.module.scss";

const FaqSection = () => {
  return (
    <div className={styles.FaqSection}>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <div className={styles.question}>
        <h4>How Do I Start?</h4>
      </div>
      <div className={styles.answer}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          reprehenderit perferendis sunt magni dolores ratione.
        </p>
      </div>
      <div className={styles.faqLine} />
      <div className={styles.question}>
        <h4>What Products do you offer?</h4>
      </div>
      <div className={styles.answer}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          reprehenderit perferendis sunt magni dolores ratione.
        </p>
      </div>
      <div className={styles.faqLine} />
      <div className={styles.question}>
        <h4>Different Payment Methods</h4>
      </div>
      <div className={styles.answer}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          reprehenderit perferendis sunt magni dolores ratione.
        </p>
      </div>
      <div className={styles.faqLine} />
      <div className={styles.question}>
        <h4>Daily Schedule</h4>
      </div>
      <div className={styles.answer}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          reprehenderit perferendis sunt magni dolores ratione.
        </p>
      </div>
      <div className={styles.faqLine} />
    </div>
  );
};

export default FaqSection;
