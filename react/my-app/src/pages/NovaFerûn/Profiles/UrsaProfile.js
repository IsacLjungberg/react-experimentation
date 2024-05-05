import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function UrsaProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Ursa den Ohörde"
            summary = "Skicklig jägare och ledare över Skuggbladen"
            mask = "Kall och hänsynslös ledare"
            hiddenFace = "Fruktar de utomstående och vad de kan göra mot hennes folk"
            drives = 
            {<ul>
                <li></li>
            </ul>}
            appearence = {
                <div>
                    Svart, relativt liten och mycket sleek till formen
                </div>
            }
            plans = {
                <div>
                    Undersöka om Senarax eller folket i {dictionary.VandrarUtposten}
                </div>
            }
            bio = {
                    <ul>
                        <li>Age: 32</li>
                        <li>Species: Ödlefolk</li>
                    </ul>
                }
            
            abilities = {
                <div>
                    Relativt kraftfull gloomstalker ranger (level 7)
                </div>
            }
        />
    </>
}