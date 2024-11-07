import { useState } from 'react';
import AnimatedDropDown from './AnimatedDropDown';

function MobileHeader() {
  const [show, setShow] = useState(false);

  return (
    <header className="bg-black fixed z-50 w-full cursor-pointer flex flex-col justify-center items-center border-b-2 border-pink-500 text-white py-5">
      <p className="text-3xl font-bold" onClick={() => setShow(!show)}>
        YSG
      </p>

      <AnimatedDropDown show={show} />
    </header>
  );
}

export default MobileHeader;
