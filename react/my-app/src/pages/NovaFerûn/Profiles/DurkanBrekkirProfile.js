import React from 'react';
import CharacterProfile from '../CharacterProfile'
import characterArt from '../Assets/DurkanBrekkir.png'

export default function DurkanBrekkirProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Durkan Brekkir"
            summary = {<div>Dvärgisk ledare över {dictionary.VandrarUtposten}</div>}
            mask = "En orädd ledare som har saker under kontroll"
            hiddenFace = "En man som kämpar mot hårda odds och desperat försöker hålla ihop saker utan att försaka sin ära"
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
                        <li>Age: 230 </li>
                        <li>Species: Dvärg</li>
                    </ul>
                }
            
            abilities = {
                <div>
                    7th level battlemaster fighter
                </div>
            }

            image = {<img height = "320px" src = {characterArt}/>}
        />
    </>
}