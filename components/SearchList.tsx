"use client"
import React from 'react'
import { SearchListProps } from '../types'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions,ComboboxOption, Transition } from '@headlessui/react'   
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { vehicletypes } from '../constants'
import { relative } from 'path'

const SearchList = ({list, setList} : SearchListProps) => {
    const [query, setQuery] = useState('');



    const filteredVehicles = query.trim() == "" ? vehicletypes
    : vehicletypes.filter((vehicle) => (vehicle.toLowerCase().replace(/\s+/g, '')
    .includes(query.toLowerCase().replace(/\s+/g, ''))));

  return (
    <div className='search-list'>
        <Combobox>
            <div className="relative w-full">
                <ComboboxButton className="absolute top-[14px]">
                    <Image src="/car_icon.png" width={20} height={20} className="ml-4" alt="car-logo" />
                </ComboboxButton>
                
                <ComboboxInput className="search-list__input" placeholder="Automovil" 
                displayValue= {(list : string) => list}
                onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}>

                    <ComboboxOptions className="search-list__options absolute">
                        {filteredVehicles.map((vehicle) => (
                                <ComboboxOption 
                                value={vehicle} 
                                className={({ active, selected }) =>
                                  `relative search-list__option ${
                                    active ? 'bg-primary-500 text-white' : 'bg-black text-white'
                                  }`
                                }
                              >
                                {vehicle}
                              </ComboboxOption>
                              
                            )
                        )}
                    </ComboboxOptions>
                </Transition>


            </div>
        </Combobox>
    </div>
  )
}

export default SearchList