import React, { useEffect, useState } from 'react'
import CharacterList from './CharacterList'
import Search from "./Search"

export default function Characters() {
  
  const [characters, setCharacters] = useState([]) 
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=> {
    fetch("http://localhost:6001/results")
    .then(response => response.json())
    .then((data) => {
      setCharacters(data)
    })
  }, [])

  // console.log(filteredChar)
   const displayedCharacters = characters.filter((character) => {
     return character.name.toLowerCase().includes(searchTerm.toLowerCase())
   })

  return (
    <>
    <br></br>
    <div className='Characters'>Characters</div>
    <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
    <CharacterList characters={displayedCharacters}/>
    </>
  )
}
