import React from 'react'
import { Card } from 'antd'
import CustomButton from './CustomButton'
import './styles.css'
import { CustomTileProps } from '../types'



const Tile = ({Name, Features, Price, Image} : CustomTileProps) => {
  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("Tile clicked");
  }
  return (
    <div className="flex justify-center">
      <Card title="GPS J16" className="m-5" style={{ width: 300 }} hoverable = {true} 
      cover={ <img alt="image" src={Image} className='p-3 w-full h-[300px] object-cover'/> }
      >
          <p><b>Nombre: </b> {Name}</p>
          <p><b>Caracteristicas: </b>{Features}</p>
          <p><b>Precio: </b>RD$ {parseFloat(Price).toFixed(2)}</p>
          <CustomButton title="Guardar" handleClick={handleClick} containerStyles="bg-primary-500 text-white w-full rounded-lg h-15 mt-4" />
      </Card> 

    </div>

  )
} 

export default Tile