import React from 'react'
import CharacterCard from './CharacterCard'

// export default function CharacterList({characters}) {
//     console.log(characters)
//     const charArr = characters.map((character) => {
//         return (
//             <CharacterCard 
//                 key={character.id}
//                 character={character}/>
//         )
//     })
//     console.log(charArr)
//     return (
//         <ul className="cards">{charArr}</ul>
//     )
// }

export default function CharacterList({characters, onDeleteCharacter}) {
    console.log(characters);
    return <div className='cards'>
        {characters.map((character) => {
            return (
                <CharacterCard key={character.id} character={character} onDeleteCharacter={onDeleteCharacter}/>
            )
        })}
    </div>
}
