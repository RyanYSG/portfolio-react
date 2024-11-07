import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedButton({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.a
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      href="#"
      whileHover={{
        scale: 1.05,
      }}
      className="p-5 border-pink-500 border-2 max-w-full rounded-md text-center text-2xl font-thin text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
    >
      {children}
    </motion.a>
  );
}

export default AnimatedButton;
