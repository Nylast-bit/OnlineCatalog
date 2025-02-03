"use client"

import React, { useState } from 'react'
import { CustomFilter, Hero, SearchBar } from '../../components'
import Tile from '../../components/Tile'
import { createDevice, deviceExists } from '@/server/queries/device.queries'
import './globals.css'
import CustomButton from '../../components/CustomButton'
import TileContainer from '../../components/TileContainer'

/*import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faUser, faEnvelope, faLock)*/

export default function Home() {
  const [device, setDevice] = useState<any>(null) // Estado inicial en null

  const handleClick = async (e: any) => {
    try {
      
      
      // Actualiza el estado con el dispositivo creado
    } catch (error) {
      console.error("Error al crear el dispositivo:", error) // Maneja cualquier error
    }
  }

  return (
    <main className="overflow-hidden" >
      <Hero />

      <div className="mt-2 padding-x padding-y max-width" id="discover">
        <div className="home__text-container" >
          <h1 className="font-extrabold text-4xl" >Catálogo</h1>
          <p>Descubre el servicio que se adapta a ti</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilter title="XXX" />
            <CustomFilter title="XXX" /> */}
          </div>
        </div>
          <TileContainer />
      </div>
      <div className="bg-primary-500 w-full h-{200px}">
      
      </div>
    </main>
  )
}
