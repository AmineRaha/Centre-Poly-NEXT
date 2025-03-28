import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";


const Counter = ({ from, to, duration }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const controls = animate(count, to, { duration: duration });
    return controls.stop;
  }, [isInView, count, to, duration]);

  return <motion.p>{rounded}</motion.p>;
};

export default Counter