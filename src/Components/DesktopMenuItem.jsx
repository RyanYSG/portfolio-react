import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function DesktopMenuItem({ children, to }) {
  return (
    <motion.li className="text-white list-none font-bold border-b-2 border-pink-500 hover:border-pink-600 transition-colors">
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="p-2 "
      >
        {children}
      </Link>
    </motion.li>
  );
}

export default DesktopMenuItem;
