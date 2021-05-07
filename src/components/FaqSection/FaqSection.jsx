import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import styles from "./FaqSection.module.scss";
import Toggle from "../Toggle/Toggle";

const FaqSection = () => {
  return (
    <div className={styles.FaqSection}>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className={styles.answer}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className={styles.answer}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className={styles.answer}>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <Toggle title="Daily Schedule">
        <div className={styles.answer}>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
      </Toggle>
    </div>
  );
};

export default FaqSection;
