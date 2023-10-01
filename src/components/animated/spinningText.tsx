import { motion, useScroll, useTransform, MotionValue, cubicBezier, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

const spinAnimationVariants = {
  initial: {
    rotateY: 0,
  },
  animate: (index: number) => {
    return {
      rotateY: [0, 90, 180, 270, 360],
      transition: {
        delay: 0.05 * index,
      }
    }
  }
}

const SpinningText = ({ text }: { text: string }) => {
  const [isTextHovered, setIsTextHovered] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isTextHovered)
      controls.start("animate");
  }, [isTextHovered]);

  const handleMouseEnter = () => {
    setIsTextHovered(true);
    setIsAnimating(true);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }} onMouseEnter={handleMouseEnter}>
      {text.split('').map((char, index) => {
        if (char === ' ')
          return <div key={index} style={{marginLeft: '7px'}}/>
        else 
          return <motion.div
            key={index}
            variants={spinAnimationVariants}
            initial="initial"
            animate={controls}
            custom={index}
            onAnimationComplete={() => {
              if (index === (text.length - 1)) {
                setIsTextHovered(false);
                controls.stop();
              }
            }}
          >
            {char}
          </motion.div>
      })}
    </div>
  );
}

export default SpinningText;