export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.7,
    },
  },
};

export const titleAnim = {
  hidden: { y: 150 },
  show: {
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.5 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 0.5, delay: 0.5 },
  },
};

export const photoAnim = {
  hidden: { scale: 2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1,
      delay: 1,
    },
  },
};

export const lineAnim = {
  hidden: { width: 0 },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
      duration: 0.1,
      when: "beforeChildren",
    },
  },
};

export const slider = {
  hidden: { x: "-200%", skew: "75deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const movieContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.5,
      delay: 0.2,
      when: "beforeChildren",
    },
  },
};
