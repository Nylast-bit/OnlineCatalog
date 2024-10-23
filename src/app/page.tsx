"use client"

import React from 'react'
import { CustomFilter, Hero, SearchBar } from '../../components'
import './globals.css';  // O './index.css', según tu estructura


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-2 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl">Catálogo</h1>
          <p>Descubre el servicio que se adapta a ti</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title="XXX"/>
            <CustomFilter title="XXX"/>
         </div>
        </div>
      </div>
    </main>
  )
}
