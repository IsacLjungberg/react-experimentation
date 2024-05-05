import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function SerenadeProfileProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Serenade"
            summary = "Ung manlig tabaxi bard"
            mask = "Anständig och kontrollerad musikant"
            hiddenFace = "En man som dras mer till de bosatta samhällets frestelser än han vill erkänna"
            drives = 
            {<ul>
                <li></li>
            </ul>}
            appearence = {
                <div>
                    Siames: Ljus kropp med mörkare ansikte, lämmar och svans
                </div>
            }
            plans = {
                <div>
                    
                </div>
            }
            bio = ""
            
            abilities = {
                <div>
                    5th level lore bard
                </div>
            }
        />
    </>
}