import { Link } from 'react-scroll';
import DesktopMenuItem from './DesktopMenuItem';

function MobileHeader() {
  return (
    <header className="bg-black fixed z-40 gap-5 items-center justify-center w-full cursor-pointer flex flex-rowr border-b-2 border-pink-500 text-white py-5">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="text-3xl font-bold"
      >
        YSG
      </Link>

      <nav className="text-white z-50 flex flex-row gap-5 items-center justify-center">
        <DesktopMenuItem to="sobre">Sobre</DesktopMenuItem>
        <DesktopMenuItem to="habilidades">Habilidades</DesktopMenuItem>
        <DesktopMenuItem to="contato">Contato</DesktopMenuItem>
        <DesktopMenuItem to="projetos">Projetos</DesktopMenuItem>
      </nav>
    </header>
  );
}

export default MobileHeader;
