"use client";

import './style.css';
import { Chivo } from 'next/font/google';
import { motion, useScroll, useTransform, MotionValue, cubicBezier } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { SpinningText } from '../animated';

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
});

const easeFunction: (t: number) => number = cubicBezier(0.42, 0, 0.58, 1);

const index = (): JSX.Element => {
  const introRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start start', 'end start'],
  });

  const nameTransform: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['0%', '300%'], { ease: easeFunction });
  const studentTransform: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['0%', '200%'], { ease: easeFunction });
  const universityTransform: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['0%', '100%'], { ease: easeFunction });

  const nameOpacity: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['1', '0'], { ease: easeFunction });
  const studentOpacity: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['1', '0'], { ease: easeFunction });
  const universityOpacity: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['1', '0'], { ease: easeFunction });

  return (
    <div ref={introRef} className="flex flex-row p-[2rem] max-w-[1200px] mx-auto">
      {/* TODO: FADE IN IMAGE, STYLIZE UCLA, RESPONSIVE DESIGN */}
      <img src="/images/intro_warm.jpg" className="w-full md:max-w-md aspect-auto shadow-2xl z-0 rounded-[5rem] select-none" />

      <div className={`relative flex flex-col justify-center ${chivo.variable} font-chivo space-y-1 text-coffeeBlack text-3xl px-[2rem] select-none`}>
        <motion.h1 style={{ x: nameTransform, opacity: nameOpacity }} className="ml-[1rem]">I am Jared Velasquez.</motion.h1>
        <motion.h2 style={{ x: studentTransform, opacity: studentOpacity }} className="ml-[2.5rem]">Student of Computer Science at the</motion.h2>
        <motion.h2 style={{ x: universityTransform, opacity: universityOpacity }} className="ml-[5rem]"><SpinningText text={'University of California, Los Angeles.'} /></motion.h2>
      </div>
    </div>
  );
}

export default index;