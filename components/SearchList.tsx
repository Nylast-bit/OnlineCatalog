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

    const handleOnClick = () => {
      setQuery("");
    }
  return (
    <div className='search-list'>
        <Combobox >
            <div className="relative w-full">
                <ComboboxButton className="absolute top-[14px]" onClick={handleOnClick}>
                    <Image src="/car_icon.png" width={20} height={20} className="ml-4" alt="car-logo" />
                </ComboboxButton>
                
                <ComboboxInput className="search-list__input" placeholder="Automovil" 
                displayValue= {(list : string) => list}
                onChange={(e) => setQuery(e.target.value)}
                onClick={handleOnClick}
                />

                <Transition
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                    beforeEnter={() => setQuery('')}>


                    <ComboboxOptions className="">
                        {filteredVehicles.map((vehicle) => (
                            <ComboboxOption
                                key={vehicle}
                                value={vehicle}
                                className={({ active }) =>
                                    `relative search-list__option  ${active ? 'bg-primary-500 text-white' : ''}`
                                }
                            >
                                {vehicle}
                            </ComboboxOption>
                        ))}
                      </ComboboxOptions>

                </Transition>


            </div>
        </Combobox>
    </div>
  )
}

export default SearchList