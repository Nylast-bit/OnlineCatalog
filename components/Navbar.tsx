"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  const [showLine, setShowLine] = useState(true);
  const [logoSize, setLogoSize] = useState(120); // Tamaño inicial del logo

  useEffect(() => {
    const handleScroll = () => {
      setShowLine(window.scrollY === 0); 
      setLogoSize(window.scrollY === 0 ? 110 : 80); // Cambia tamaño cuando el scroll supera 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-10 bg-white transition-all duration-300">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 pt-6 pb-2">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/Easylogopng.png"
            alt="EasyWayGPS Logo"
            width={logoSize} // Tamaño dinámico
            height={logoSize * 3} // Mantiene proporción
            className="object-contain transition-all duration-300"
          />
        </Link>

        <Link href="/Login">
          <CustomButton title="Iniciar Sesión" btnType="button" containerStyles="bg-white text-primary-500 rounded-full min-w-[130px]" />
        </Link>
      </nav>

      {/* Línea degradada vertical */}
      <div className={`h-[25px] bg-gradient-to-t from-[#00a68e] to-[#00a68e00] ${showLine ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`} />
      <div className="h-[2px] bg-[#00a68e]" />
    </header>
  );
};

export default Navbar;
