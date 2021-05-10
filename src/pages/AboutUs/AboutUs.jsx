import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import styles from "./AboutUs.module.scss";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import ScrollTop from "../../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      className={styles.Page}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
