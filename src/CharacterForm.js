import React, { useEffect, useState } from 'react'
import {Link, Navigate, Route, Routes, useNavigate} from "react-router-dom"

export default function CharacterForm() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]) 
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [status, setStatus] = useState("")
  const [location, setLocation] = useState("")
  const [species, setSpecies] = useState("")
 
 
  useEffect(()=> {
    fetch("http://localhost:6001/results")
    .then(response => response.json())
    .then((data) => {
      setCharacters(data)
    })
  }, [])
  
  console.log(characters)
  
  

  function onAddCharacter(newCharacter) {
    const updatedCharactersArray = [...characters, newCharacter]
    setCharacters(updatedCharactersArray)
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/characters', {replace: true});
    fetch("http://localhost:6001/results", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      image: image,
      status: status,
      location: {name: location},
      species: species,
    })
  
  })
  .then((r) => r.json())
  .then((newCharacter) => onAddCharacter(newCharacter))
}

// {characters.map((character) => {
//   return (
//     <div className="card">
//         <div className="container">
//         <img src={image} alt={name} />
//         <h3>{name}</h3>
//         <h4>{status}</h4>
//         <h4>{species}</h4>
//         <h4>{location.name}</h4>
//         </div>
//     </div>
      
//   )
// })}













  return (
    <>
    <br></br>
    <div className='Header'>Character Form</div>
    <form className="form" onSubmit={handleSubmit}>
      <input onChange = {(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Character Name" />
      <br></br>
      <br></br>
      <input onChange = {(e) => setImage(e.target.value)} value={image} type="text" name="image" placeholder="Character Image URL" />
      <br></br>
      <br></br>
      <input onChange = {(e) => setStatus(e.target.value)} value={status} type="text" name="status" placeholder="Character Status" />
      <br></br>
      <br></br>
      <input onChange = {(e) => setLocation(e.target.value)} value={location} type="text" name="location" placeholder="Character Location" />
      <br></br>
      <br></br>
      <input onChange = {(e) => setSpecies(e.target.value)} value={species} type="text" name="species" placeholder="Character Species" />
      <br></br>
      <br></br>
      <br></br>
      
      <button className="button"type="submit">Add Character</button>
      
    </form>
    
    
   
    </>
  )
}

