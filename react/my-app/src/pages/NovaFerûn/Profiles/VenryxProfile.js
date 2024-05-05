import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function VenryxProfile({dictionary}){
    const elements = {
        Mask: "Bekymmerlös och lycklig poet",
        Hidden_Face: "Oroad över sin älskade, och ensam i sitt säkra hem",
        Drives: <ul>
            <li>Sin älskades säkerhet</li>
            <li>Konst och skapande</li>
        </ul>, 
        Appearence: <div>
            Röda fjäll, stilig och mjuk fysik
        </div> 
    }

    return <>
        <CharacterProfile 
            name = "Venryx"
            summary = "Stilig dragonborn och hemlig älskare till Karanax"
            elements = {elements}
        />
    </>
}