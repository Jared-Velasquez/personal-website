import { cubicBezier, motion, MotionValue, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const barVariants: Variants = {
  initial: {
    width: '0%',
    transition: {
      duration: '1s',
    }
  },
  animate: {
    width: '30%',
  }
}

const index = (): JSX.Element => {

  return (
    <div>
      {/* Projects header */}
      <div className="flex flex-row justify-center items-center">
        <motion.div
          style={{
            float: 'right',
            height: '1px',
            backgroundColor: '#382a1d'
          }}
          variants={barVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            delay: 0.3
          }}
          viewport={{
            once: true
          }}
        />
        <span className="font-chivo text-coffeeBlack text-2xl px-[1rem]">My Projects</span>
        <motion.div
          style={{
            height: '1px',
            backgroundColor: '#382a1d'
          }}
          variants={barVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            delay: 0.3
          }}
          viewport={{
            once: true
          }}
        />
      </div>
      <div>asdfasdfasdfaadsfsddf <br/>asfsadfsadfsafasf <br/> adfasdfa</div>
      <div>asdfasdfasdfaadsfsddf <br/>asfsadfsadfsafasf <br/> adfasdfa</div>
      <div>asdfasdfasdfaadsfsddf <br/>asfsadfsadfsafasf <br/> adfasdfa</div>
      <div>asdfasdfasdfaadsfsddf <br/>asfsadfsadfsafasf <br/> adfasdfa</div>
      <div>asdfasdfasdfaadsfsddf <br/>asfsadfsadfsafasf <br/> adfasdfa</div>
    </div>
  );
}

export default index;
