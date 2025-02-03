"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton';
import Link from "next/link";


const Hero = () => {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault(); // Evita el comportamiento predeterminado
      
        const section = document.getElementById("discover"); // ID de la sección destino
      
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      
          // Ajuste de offset para evitar que la sección quede oculta tras el navbar
          setTimeout(() => {
            window.scrollBy({ top: -30, behavior: "smooth" }); // Ajusta según la altura del navbar
          }, 415); // Espera un poco para que el scroll termine antes del ajuste
        }
      };
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>
                Asegura tus vehiculos con nuestro <br />  servicio
            </h1>
            <p className="hero__subtitle">
                EasyWay
                <span className="text-primary-500">GPS </span>
                es tu vuelta.
            </p>

            <Link href="#discover" onClick={handleScroll}>
      <CustomButton
        title="Explora nuestra tienda"
        containerStyles="bg-primary-500 text-white rounded-full mt-10"
        btnType="button"
      />
    </Link>
        </div>
        <div className='hero__image-container'>
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className='object-contain' />
            </div>
            <div className="hero__image-overlay"/>
        </div>
    </div>
  );
};

export default Hero