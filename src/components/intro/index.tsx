"use client";

import './style.css';
import { Chivo } from 'next/font/google';
import { motion, useScroll, useTransform, MotionValue, cubicBezier, useSpring, useAnimate, useInView, Variants, useAnimationControls } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { SpinningText } from '../animated';
import useMediaQuery from '@/app/hooks/useMediaQuery';

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
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center">
        <img
          alt="profile"
          className="rounded-[5rem] saturate-150 hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          src="images/intro_warm.jpg"
        />
      </div>
      
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Hi, I'm Jared Velasquez.
          </p>

          <p className="mt-5 mb-7 text-md text-center md:text-start">
            I'm an aspiring full-stack developer and a student of Computer Science and Engineering at the University of California, Los Angeles.
          </p>
        </motion.div>

        {/* SOCIALS */}
        <div className="flex mt-5 justify-center md:justify-start gap-7">
          <a
            className="hover:opacity-50 transition duration-250"
            href="https://github.com/Jared-Velasquez"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a
            className="hover:opacity-50 transition duration-250"
            href="https://www.linkedin.com/in/jaredvel25/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a
            className="hover:opacity-50 transition duration-250"
            href="mailto:jaredvel25@ucla.edu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default index;