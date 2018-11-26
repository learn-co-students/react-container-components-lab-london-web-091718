import React from 'react'

const Search = ({ handleChange, searchTerm, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' name='search' value={searchTerm} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Search
