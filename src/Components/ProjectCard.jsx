import Reveal from './Reveal';
import { motion } from 'framer-motion';

function ProjectCard({ title, img }) {
  return (
    <div className="flex h-full flex-col gap-2 max-w-[150px] xl:flex-row xl:w-[45%] xl:max-w-full xl:max-h-ful ">
      <motion.img
        whileTap={{
          rotate: 5,
        }}
        whileHover={{
          rotate: 5,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 10,
        }}
        src={img}
        className="max-w-[150px] max-h-[150px] w-full h-full xl:max-w-[300px] xl:max-h-[300px]"
      />
      <div className="xl:flex xl:flex-col xl:gap-2 xl:p-2 xl:w-1/2 xl:justify-between flex flex-col w-full h-full gap-2">
        <header className="w-full flex items-center justify-center">
          <Reveal>
            <h1 className="text-2xl text-center w-full font-bold">{title}</h1>
          </Reveal>
        </header>
        <motion.a
          href="#"
          whileHover={{
            scale: 1.05,
          }}
          className="w-full xl:text-xl xl:w-full xl:p-2 border-pink-500 border-2 rounded-md text-center text-2xl font-thin text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
        >
          ACCESSAR
        </motion.a>
      </div>
    </div>
  );
}

export default ProjectCard;
