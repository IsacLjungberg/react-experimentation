import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function SageProfileProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Sage"
            summary = "Äldre kvinnlig tabaxi divination wizard"
            mask = "En dygdig kvinna som bara gör det hon hör för sitt folk"
            hiddenFace = "En magiker dragen till fara och kontrovers av sin nyfikenhet"
            drives = 
            {<ul>
                <li></li>
            </ul>}
            appearence = {
                <div>
                    Gråhårig med väldigt kort päls och stora spättsiga öron
                </div>
            }
            plans = {
                <div>
                    
                </div>
            }
            bio = {
                    <ul>
                        <li>Age: </li>
                        <li>Species: </li>
                    </ul>
                }
            
            abilities = {
                <div>
                    4th level divination wizard
                </div>
            }
        />
    </>
}