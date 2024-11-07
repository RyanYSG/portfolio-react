import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function MobileSkill({ children, selfDelay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: selfDelay } },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      whileHover={{
        scale: 0.75,
        transition: {
          ease: 'easeOut',
        },
      }}
      whileTap={{
        scale: 0.75,
        transition: {
          ease: 'easeOut',
        },
      }}
      initial="hidden"
      animate={mainControls}
      className="w-fit rounded-md p-2 bg-pink-500 text-white cursor-pointer"
    >
      <p className="font-bold">{children}</p>
    </motion.div>
  );
}

export default MobileSkill;
