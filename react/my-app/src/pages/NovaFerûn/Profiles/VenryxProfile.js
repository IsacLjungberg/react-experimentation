import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function VenryxProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Venryx"
            summary = "Stilig dragonborn och hemlig älskare till Karanax"
            mask = "Bekymmerlös och lycklig poet"
            hiddenFace = "Oroad över sin älskade, och ensam i sitt säkra hem"
            drives = 
            {<ul>
                <li>Sin älskades säkerhet</li>
                <li>Konst och skapande</li>
            </ul>}
            appearence = {
                <div>
                    Röda fjäll, stilig och mjuk fysik
                </div>
            }
            plans = {
                <div>
                    Övertala Karanax att låta honom resa mer
                </div>
            }
            bio = {
                    <ul>
                        <li>Age: </li>
                        <li>Species: </li>
                    </ul>
                }
        />
    </>
}