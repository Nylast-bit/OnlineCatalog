import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className='flex justify-center items-center'>
                <Image src="/Easylogopng.png" alt="EasyWayGPS Logo" width={160} height={40} className='object-contain' />
            </Link>

            <CustomButton title="Iniciar Sesión" btnType="button" containerStyles=" bg-white text-primary-500 rounded-full min-w-[130px]"/>
        </nav>

    </header>
  )
}

export default Navbar