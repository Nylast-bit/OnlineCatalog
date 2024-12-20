import React from 'react'
import { Card } from 'antd'
import CustomButton from './CustomButton'
import './styles.css'



const Tile = () => {
  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("Tile clicked");
  }
  return (

    <Card title="GPS J16" className="m-5" style={{ width: 300 }} hoverable = {true} 
    cover={ <img alt="example" src="https://res.cloudinary.com/decygjryy/image/upload/v1734049285/J168_2048x_btf0qd.webp" className='p-3'/> }
    >
        <p><b>Nombre:</b> GPS J16</p>
        <p><b>Caracteristicas:</b> 4G, Hasta 24 horas de bateria, Geocerca</p>
        <p><b>Precio:</b> $1.000</p>
        <CustomButton title="Guardar" handleClick={handleClick} containerStyles="bg-primary-500 text-white w-full rounded-lg h-15 mt-4" />
    </Card> 

  )
}

export default Tile