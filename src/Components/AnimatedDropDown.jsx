import MenuItem from './MenuItem';
import { motion } from 'framer-motion';

function AnimatedDropDown({ show }) {
  const variants = {
    hidden: {
      height: 0,
      opacity: 0,
      pointerEvents: 'none',
      dislay: 'none',
      transition: { delay: 0.5 },
    },
    visible: {
      height: 'fit-content',
      opacity: 1,
      pointerEvents: 'auto',
      display: 'auto',
      transition: { delay: 0 },
    },
  };

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      transition={{
        duration: 0.5,
      }}
      className="flex bg-black flex-col w-full justify-center items-center list-none font-bold"
    >
      <MenuItem to="sobre" selfDelay={0.1} show={show}>
        Sobre
      </MenuItem>
      <MenuItem to="habilidades" selfDelay={0.2} show={show}>
        Habilidades
      </MenuItem>
      <MenuItem to="contato" selfDelay={0.3} show={show}>
        Contato
      </MenuItem>
      <MenuItem to="projetos" selfDelay={0.4} show={show}>
        Projetos
      </MenuItem>
    </motion.nav>
  );
}

export default AnimatedDropDown;
