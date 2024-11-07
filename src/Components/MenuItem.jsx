import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-scroll';

function MenuItem({ children, selfDelay, show, to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: { delay: selfDelay },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: selfDelay },
    },
  };

  return (
    <motion.li
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      className="w-1/2 flex justify-center items-center border-b-2 border-pink-600"
    >
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="p-5 w-full text-center text-white"
      >
        {children}
      </Link>
    </motion.li>
  );
}

export default MenuItem;
