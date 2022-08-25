import React from "react"

export default function CharacterCard({character}) {
  console.log({character})
  const { name, image, status, species, location} = character;
  console.log(character.name)
  return (
    <div className="card">
        <div className="container">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{status}</h4>
        <h4>{species}</h4>
        <h4>{location.name}</h4>
        </div>
    </div>
    
  )
}

