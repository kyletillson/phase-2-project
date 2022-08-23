import React from 'react'
import {Link, Route, Routes} from "react-router-dom"
import Home from './Home';
import Characters from './Characters';
import CharacterForm from './CharacterForm';

export default function NavBar() {
  return (
    <div>
    <nav className='NavBar'>
      
        <div>
          <Link to="/" className='Link'>Home</Link>
        </div>
        <div>
          <Link to="/characters" className='Link'>Characters</Link>
        </div>
        <div>
          <Link to="/characterform" className='Link'>Character Form</Link>
        </div>
      
    </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />}/>
      <Route path="/characterform" element={<CharacterForm />}/>
    </Routes>
    
    
    </div>
  )
}
