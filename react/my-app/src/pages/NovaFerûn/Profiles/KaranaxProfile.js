import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function KaranaxProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Karanax"
            summary = "Black dragon god"
            mask = "Infallible immortal god, devoid of attachments"
            hiddenFace = "Greedy protector of his secret beloved"
            drives = 
            {<ul>
                <li>The safety of his beloved</li>
                <li>The growth of his hoard</li>
            </ul>}
            appearence = {
                <div>
                    Mighty and regal, with worn scales and piercing eyes
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
        />
    </>
}