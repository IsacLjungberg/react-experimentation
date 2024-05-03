import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function ErikCederénProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Erik Cederén"
            mask = "Cunning and ruthless mastermind"
            hiddenFace = "Attention hungry narcissist with a fragile ego"
            drives = 
            {<ul>
                <li>Attention and admiration</li>
                <li>Familial approval</li>
                <li>Vengeance for perceived sleights</li>
            </ul>}
            appearence = {
                <div>
                    Well dressed and well kept with sharp features, nearly always smiling.<br/><br/>
                    <i>Brown hair, grey eyes</i>
                </div>
            }
            plans = {
                <div>
                    Ruthlessly amass power to become respected and feared, through various immoral schemes such as: 
                    <ul>
                        <li>Selling indentured servants (slaves)</li>
                    </ul>
                    &
                    <br/>
                    Destroy Laharl, and then kill him.
                </div>
            }
            bio = {
                    <ul>
                        <li>Age: </li>
                        <li>Species: </li>
                    </ul>
                }
            abilities = {
                <div>Massive wealth</div>
            }
        />
    </>
}