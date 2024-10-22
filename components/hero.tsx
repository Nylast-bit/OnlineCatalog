"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {
        
    }
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

            <CustomButton
            title="Explora nuestra tienda"
            containerStyles= "bg-primary-500 text-white rounded-full mt-10"
            handleClick={handleScroll}
            btnType='button'
            />
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