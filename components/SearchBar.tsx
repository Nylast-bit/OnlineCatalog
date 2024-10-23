"use client"

import React from 'react'
import SearchList from './SearchList'
import { useState } from 'react'


const SearchBar = () => {
  const [list, setList] = useState('');

  const handleSearch = () => {
    
  }
  return (
    <form  className="searchbar flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl" onSubmit=
    {handleSearch}>
      <div className="searchbar__item">
        <SearchList list={list} setList={setList}/>
      </div>
    </form>
  )
}

export default SearchBar