import React from "react"

export default function CharacterCard({character, onDeleteCharacter}) {
  console.log({character})
  const { id, name, image, status, species, location} = character;
  console.log(character.name)
  function handleDeleteClick() {
    fetch(`http://localhost:6001/results${id}`, {
      method: "DELETE", 
    }
   )
    onDeleteCharacter(id)
  }
  return (
    <div className="card">
        <div className="container">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{status}</h4>
        <h4>{species}</h4>
        <h4>{location.name}</h4>
        <button className="button" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
    
  )
}

