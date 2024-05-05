import React from 'react';
import CharacterProfile from '../CharacterProfile'

export default function AratakProfile({dictionary}){
    return <>
        <CharacterProfile 
            name = "Aratak Flodspredikaren"
            summary = "Kraftfull krigare och ledare över Flodsvandrarna"
            mask = "Ostoppbar och självsäker ledare"
            hiddenFace = "Rädd för att allt ska falla samman"
            drives = 
            {<ul>
                <li></li>
            </ul>}
            appearence = {
                <div>
                    Grön, stor och kraftfull med ett flertal ärr
                </div>
            }
            plans = {
                <div>
                    Konvertera {dictionary.VandrarUtposten}s befolkning, och samtidigt ta reda på om Senarax utgör ett hot.
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
                    Kraftfull krigare (CR 5)
                </div>
            }
        />
    </>
}