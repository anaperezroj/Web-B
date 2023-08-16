import { useState } from 'react';

import { GrMenu } from 'react-icons/gr';

function Navbar() {
  //Estado de navbar
  const [nav, setNav] = useState(false);

  //Función de nuestra navbar para poner el estado opuesto
  const handleNavbar = () => {
    setNav(!nav);

    //Evitamos scroll de la navbar
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-white font-bold text-2xl z-20'>Bootcamp</h1>
      <GrMenu
        onClick={handleNavbar}
        className='z-20 text-white 
        cursor-pointer'
        size={25}
      />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'>Home</li>
          <li className='font-bold text-3xl p-8'>Destinos</li>
          <li className='font-bold text-3xl p-8'>Recursos</li>
          <li className='font-bold text-3xl p-8'>Habitaciones</li>
          <li className='font-bold text-3xl p-8'>Tipos de viajes</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
