import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export function useAnimScroll(threshold = 0.4) {
  const [ref, inView] = useInView({ threshold });
  const controls = useAnimation();

  inView ? controls.start("show") : controls.start("hidden");

  return [ref, controls];
}
