import Reveal from './Reveal';
import { motion } from 'framer-motion';

function ContactCard({ name, children, icon, to }) {
  return (
    <motion.a
      whileTap={{
        scale: 1.2,
      }}
      whileHover={{
        x: '5%',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }}
      className="w-full flex flex-row gap-2 cursor-pointer"
      href={to}
      target="_blank"
    >
      {icon}
      <section className="w-[75%] ">
        <Reveal>
          <h1 className="text-3xl">{name}</h1>
        </Reveal>

        <Reveal>
          <p className="text-xl w-full font-thin">{children}</p>
        </Reveal>
      </section>
    </motion.a>
  );
}

export default ContactCard;
