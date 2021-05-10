import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const url = useLocation();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);

      window.scrollTo(0, 0);
    }
  }, [url]);

  return null;
};

export default ScrollTop;
