import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { picturesState } from "../../picturesState";
import styles from "./WorkDetail.module.scss";
import Title from "../../components/Title/Title";

const WorkDetail = () => {
  const history = useHistory();

  const url = history.location.pathname;

  // eslint-disable-next-line no-unused-vars
  const pictures = picturesState();
  // eslint-disable-next-line no-unused-vars
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const currentPicture = pictures.filter((pic) => pic.url === url);

    setPicture(currentPicture[0]);
  }, [pictures, url]);

  return picture ? (
    <motion.div
      className={styles.Page}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={styles.headLine}>
        <h2>{picture.title}</h2>
        <img src={picture.mainImg} alt={picture.title} />
      </div>
      <div className={styles.titles}>
        {picture.titles.map((title) => (
          <Title
            title={title.title}
            description={title.description}
            key={title.title}
          />
        ))}
      </div>
      <img
        src={picture.secondaryImg}
        alt={picture.title}
        className={styles.secondaryImg}
      />
    </motion.div>
  ) : null;
};

export default WorkDetail;
