"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  // Estado para controlar la visibilidad de la línea
  const [showLine, setShowLine] = useState(true);


  // Efecto para mostrar u ocultar la línea en función del scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowLine(window.scrollY === 0); // Si el scroll es 0, la línea será visible
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-10 bg-white">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 pt-6 pb-2">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/Easylogopng.png"
            alt="EasyWayGPS Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </Link>

            <Link href= "/Login">
              <CustomButton title="Iniciar Sesión" btnType="button" containerStyles=" bg-white text-primary-500 rounded-full min-w-[130px]"/>
            </Link>
        </nav>

      {/* Línea degradada vertical */}
      <div
        className={`h-[25px] bg-gradient-to-t from-[#00a68e] to-[#00a68e00]  ${
          showLine ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500 ease-in-out`}
      ></div>
      <div className='h-[2px] bg-[#00a68e] '></div>
    </header>
  );
};

export default Navbar;
