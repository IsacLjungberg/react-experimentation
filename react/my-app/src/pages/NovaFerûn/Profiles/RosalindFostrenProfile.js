import React from 'react';
import CharacterProfile from '../CharacterProfile'
import characterArt from '../Assets/RosalindFostren.jpg'

export default function RosalindFostrenProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Rosalind Fostren"
            summary = {<div>Ägaren av Lejonets Taverna i {dictionary.VandrarUtposten}</div>}
            mask = "Vänlig och okomplicerad, men tuff, kämpe för den sociala samron"
            hiddenFace = "En före detta adelskvinna från en förådd ätt, som flytt sitt mörka förflutna"
            drives = 
            {<ul>
                <li></li>
            </ul>}

            plans = {
                <div>
                    
                </div>
            }

            bio = {
                    <ul>
                        <li>Age: 32</li>
                    </ul>
                }
            
            abilities = {
                <div>
                    I hemlighet en 3rd level draconic bloodline sorcerer
                </div>
            }

            image = {<img height = "320px" src = {characterArt}/>}
        />
    </>
}