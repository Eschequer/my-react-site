import React from "react";
import styles from "./AboutSection.module.scss";
import about1 from "../../images/about1.jpg";

const AboutSection = () => {
  return (
    <div className={styles.AboutSection}>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={about1} alt="photographer" />
      </div>
    </div>
  );
};

export default AboutSection;
