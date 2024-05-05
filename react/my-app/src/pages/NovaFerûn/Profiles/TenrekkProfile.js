import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function TenrekkProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Tenrekk"
            summary = "Vätte alkemist"
            mask = "Självisk och sarkastisk"
            hiddenFace = "Egentligen relativt ärlig, med en soft spot för drabbade av svåra situationer"
            drives = 
            {<ul>
                <li></li>
            </ul>}
            appearence = {
                <div>
                    
                </div>
            }
            plans = {
                <div>
                    
                </div>
            }
            bio = {
                    <ul>
                        <li>Age: 42</li>
                        <li>Species: Goblin</li>
                    </ul>
                }
            
            abilities = {
                <div>
                    1st level alchemist artificer
                </div>
            }
        />
    </>
}