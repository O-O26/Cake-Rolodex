import React from 'react'
import "./SearchBox.css"

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
      type='search'
      className= {`search-box ${className}`}
      placeholder = {placeholder}
      onChange = {onChangeHandler}
      />
    
    </div>
  )
}

export default SearchBox