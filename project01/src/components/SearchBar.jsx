import React from 'react'
import {FaSearch} from 'react-icons/fa'
import "./SearchBar.css"
function SearchBar() {
  return (
    <>
    
    <div className="input-wrap">
        <FaSearch id="search-icon"/>
      <input type="search" placeholder='Climate Change' />
    </div>

    <div className='button-wrap'>
        <button id='srch-btn'>Search the Web</button>
    </div>
    </>
    
  )
}

export default SearchBar
