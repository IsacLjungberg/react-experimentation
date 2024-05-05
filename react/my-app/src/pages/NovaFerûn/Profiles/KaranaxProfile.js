import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function KaranaxProfile({dictionary}){
    const elements = {
        Mask: "Infallible immortal god, devoid of attachments",
        Hidden_Face: "Greedy protector of his secret beloved",
        Drives: <ul>
            <li>The safety of his beloved</li>
            <li>The growth of his hoard</li>
        </ul>,
        Appearence: <div>
            Mighty and regal, with worn scales and piercing eyes
            </div>
    }

    return <>
        <CharacterProfile 
            name = "Karanax"
            summary = "Black dragon god"

            elements = {elements}
        />
    </>
}