import { cubicBezier, motion, MotionValue, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const projectContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const index = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      {/* PROJECTS GRID*/}
      <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
      </div>
    </div>
  );
}

export default index;
