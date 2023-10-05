"use client";

import './style.css';
import { Chivo } from 'next/font/google';
import { motion, useScroll, useTransform, MotionValue, cubicBezier, useSpring, useAnimate, useInView, Variants, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { SpinningText } from '../animated';

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
});

const introTextVariants: Variants = {
  textInitial: {
    x: '100px',
    opacity: 0
  },
  textAnimate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: (0.5 * index) + 0.5,
    }
  })
}

const imageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  }
}

const easeFunction: (t: number) => number = cubicBezier(0.42, 0, 0.58, 1);

const index = (): JSX.Element => {
  const introRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start start', 'end start'],
  });

  const nameTransform: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['0%', '50%'], { ease: easeFunction });
  const studentTransform: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['0%', '35%'], { ease: easeFunction });
  const universityTransform: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['0%', '15%'], { ease: easeFunction });

  const nameOpacity: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['1', '0'], { ease: easeFunction });
  const studentOpacity: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['1', '0'], { ease: easeFunction });
  const universityOpacity: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['1', '0'], { ease: easeFunction });

  return (
    <div ref={introRef} className="flex flex-col md:flex-row h-[100vh] items-center mb-[3rem]">
      {/* TODO: FADE IN IMAGE, STYLIZE UCLA, RESPONSIVE DESIGN */}
      <motion.img 
        src="/images/intro_warm.jpg" 
        className="shadow-2xl z-0 rounded-[5rem] select-none profile-image" 
        variants={imageVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      />

      <div className={`relative flex flex-col justify-center ${chivo.variable} font-chivo space-y-1 text-coffeeBlack text-3xl pl-[2rem] pr-[1rem] select-none`}>
        <motion.h2
          variants={introTextVariants}
          custom={0}
          initial="textInitial"
          animate="textAnimate"
          viewport={{ once: true }}
          style={{ x: nameTransform, opacity: nameOpacity }}
          className="ml-[1rem]"
        >
          I'm Jared Velasquez, a student of
        </motion.h2>
        <motion.h2 
          variants={introTextVariants}
          custom={1}
          initial="textInitial"
          animate="textAnimate"
          style={{ x: studentTransform, opacity: studentOpacity }} 
          className="ml-[2.5rem]"
        >
          Computer Science and Engineering at
        </motion.h2>
        <motion.h2 
          variants={introTextVariants}
          custom={2}
          initial="textInitial"
          animate="textAnimate"
          style={{ x: universityTransform, opacity: universityOpacity }} 
          className="ml-[5rem]"
        >
          <SpinningText text={'University of California, Los Angeles.'} />
        </motion.h2>
      </div>
    </div>
  );
}

export default index;