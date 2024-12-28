"use client"
import React from 'react';
//import Image from 'next/image';
import { CustomButtonProps } from '../types';
import './styles.css';

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button 
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn btnstyles ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">
        {title} 
      </span>
    </button>
  );
}

export default CustomButton;
